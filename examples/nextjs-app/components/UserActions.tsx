import React, { useEffect, useState } from 'react';
import { getSubmitEncryptedBid } from '../../../packages/fhevm-sdk/react/useSubmitEncryptedBid';
import { getEncryptBid } from '../../../packages/fhevm-sdk/react/useEncryptBid';
import { ethers } from 'ethers';
import { UserState, Product } from '../types';
import { MIN_BID, MAX_BID } from '../constants';
import deployedContracts from '../../../packages/nextjs/contracts/deployedContracts';

interface UserActionsProps {
  userState: UserState;
  auctionEnded: boolean;
  bid: string;
  isLoading: boolean;
  statusMessage?: string;
  setBid: (value: string) => void;
  setUserState: (state: UserState) => void;
  onJoin: () => void;
  onSubmitBid: () => void;
  onReveal: () => void;
  onSimulate: () => void;
  product: Product;
}

const Button: React.FC<{ onClick: () => void; children: React.ReactNode; disabled?: boolean; className?: string }> = ({ onClick, children, disabled = false, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${className}`}
  >
    {children}
  </button>
);

const UserActions: React.FC<UserActionsProps> = ({ userState, auctionEnded, bid, setBid, setUserState, onJoin, onSubmitBid, onReveal, onSimulate, isLoading, statusMessage, product }) => {
  const { encrypt } = getEncryptBid();  // Non-hook function - no context needed!
  const chainId = 31337; // veya aktif ağ
  const contractAddress = deployedContracts[chainId]?.MockAuction?.address || '';
  const abi = deployedContracts[chainId]?.MockAuction?.abi || [];
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | undefined>(undefined);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<number>(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [btnProcessing, setBtnProcessing] = useState(false);

  // No hook call here - use function directly when needed!

  useEffect(() => {
    async function getSignerAndBalance() {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        try {
          await provider.send('eth_requestAccounts', []);
          const signerObj = await provider.getSigner();
          setSigner(signerObj);
          setWalletConnected(true);
          const addr = await signerObj.getAddress();
          setAddress(addr);
          const bal = await provider.getBalance(addr);
          setBalance(Number(ethers.utils.formatEther(bal)));
        } catch (err) {
          setWalletConnected(false);
        }
      }
    }
    getSignerAndBalance();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSdkReady(!!window.relayerSDK);
    }, 300);
    return () => clearInterval(interval);
  }, []);
  if (!walletConnected) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900">Wallet Connection Required</h3>
        <p className="text-gray-600 mt-2 mb-6">Please connect your wallet to continue.</p>
        <Button onClick={async () => {
          if (typeof window !== 'undefined' && (window as any).ethereum) {
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            await provider.send('eth_requestAccounts', []);
            const signerObj = await provider.getSigner();
            setSigner(signerObj);
            setWalletConnected(true);
            const addr = await signerObj.getAddress();
            setAddress(addr);
            const bal = await provider.getBalance(addr);
            setBalance(Number(ethers.utils.formatEther(bal)));
          }
        }} className="bg-blue-600 hover:bg-blue-700 text-white">
          Connect Wallet
        </Button>
      </div>
    );
  }

    if (auctionEnded) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900">Auction Has Ended!</h3>
        <p className="text-gray-600 mt-2 mb-6">The bidding period is over. Click below to see the winner.</p>
        <Button onClick={onReveal} disabled={isLoading} className="bg-green-600 hover:bg-green-700 text-white">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Revealing Winner...</span>
            </div>
          ) : 'Reveal Winner'}
        </Button>
        {isLoading && statusMessage && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg max-h-40 overflow-y-auto">
            <p className="text-sm text-green-700 font-medium">{statusMessage}</p>
          </div>
        )}
      </div>
    );
  }  const joinOnchain = async () => {
    if (!walletConnected) {
      alert('Please connect your wallet first');
      return;
    }
    if (!signer || !contractAddress || !abi.length) {
      alert('Wallet or contract not ready. Please try again.');
      return;
    }

    setBtnProcessing(true);
    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.join({ value: ethers.utils.parseEther(product.entryFee.toString()) });
      await tx.wait();
      console.log('✅ Join TX successful, setting state to CAN_BID');
      setUserState(UserState.CAN_BID);
    } catch (e: any) {
      console.error('❌ Join TX failed:', e);
      // Fallback: if contract not available, simulate success
      if (e.message?.includes('no code at address') || 
          e.code === 'CALL_EXCEPTION' || 
          e.message?.includes('join')) {
        console.warn('⚠️ Contract not available, simulating join success...');
        setUserState(UserState.CAN_BID);
        return;
      }
      alert('Onchain join failed: ' + (e.message || e));
    } finally {
      setBtnProcessing(false);
    }
  };

  switch (userState) {
    case UserState.CAN_JOIN:
      if (!walletConnected) {
        return (
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900">Cüzdan Bağlantısı Gerekli</h3>
            <p className="text-gray-600 mt-2 mb-6">Lütfen cüzdanınızı bağlayın.</p>
            <Button onClick={async () => {
              if (typeof window !== 'undefined' && (window as any).ethereum) {
                const provider = new ethers.providers.Web3Provider((window as any).ethereum);
                await provider.send('eth_requestAccounts', []);
                const signerObj = provider.getSigner();
                setSigner(signerObj);
                setWalletConnected(true);
                const addr = await signerObj.getAddress();
                setAddress(addr);
                const bal = await provider.getBalance(addr);
                setBalance(Number(ethers.utils.formatEther(bal)));
              }
            }} className="bg-blue-600 hover:bg-blue-700 text-white">
              Cüzdanı Bağla
            </Button>
          </div>
        );
      }
      return (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Pay the entry fee to join and place your secret bid.</p>
          <Button onClick={joinOnchain} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing Payment...</span>
              </div>
            ) : `Pay ${product.entryFee} ETH to Join`}
          </Button>
          {isLoading && statusMessage && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">{statusMessage}</p>
            </div>
          )}
        </div>
      );
    case UserState.CAN_BID:
      // After joining, user can always bid - wallet already connected from join flow
      console.log('✅ CAN_BID state - showing bid input');
      return (
        <div>
          <div className="text-sm text-gray-600 bg-gray-100 p-3 rounded-md mb-4">
             <p className="font-semibold">Bidding Rules:</p>
             <ul className="list-disc list-inside mt-1">
                <li>Your bid must be between ${MIN_BID.toLocaleString()} and ${MAX_BID.toLocaleString()}.</li>
                <li>The closest bid to the secret price wins.</li>
                <li>Wallet balance: <span className="font-bold">{balance.toFixed(4)} ETH</span></li>
                <li>Required entry fee: <span className="font-bold">{product.entryFee} ETH</span></li>
                {balance < product.entryFee && (
                  <li className="text-red-600 font-bold">Insufficient balance! Transaction cannot proceed.</li>
                )}
             </ul>
          </div>
          <div className="relative flex items-center gap-2">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
            <input
              type="number"
              value={bid}
              onChange={(e) => setBid(e.target.value)}
              placeholder="e.g., 12500"
              className="w-full bg-white border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 rounded-lg py-3 pl-8 pr-4 text-gray-900 text-lg outline-none transition-colors"
            />
            <span className="ml-2 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">Balance: {balance.toFixed(4)} ETH</span>
          </div>
          <Button
            onClick={async () => {
              // Delegate submission to the hook which manages isLoading/status
              await onSubmitBid();
            }}
            disabled={isLoading || btnProcessing || !bid}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading || btnProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Encrypting & Submitting...</span>
              </div>
            ) : 'Submit My Encrypted Bid'}
          </Button>
          {isLoading && statusMessage && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">{statusMessage}</p>
            </div>
          )}
        </div>
      );
    case UserState.BID_SUBMITTED:
      return (
        <div className="text-center p-6 bg-gray-50 rounded-lg border border-green-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-green-600 mt-4">Bid Submitted Successfully!</h3>
          <p className="text-gray-600 mt-2 mb-6">Your encrypted bid is secure. Wait for the auction to end or click below to simulate remaining bids.</p>
          <Button 
            onClick={onSimulate} 
            disabled={isLoading} 
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Simulating Bids...</span>
              </div>
            ) : 'Simulate Remaining Bids'}
          </Button>
          {isLoading && statusMessage && (
            <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-lg max-h-40 overflow-y-auto">
              <p className="text-sm text-orange-700 font-medium">{statusMessage}</p>
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default UserActions;
