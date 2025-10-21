// React hook for submitting encrypted bid onchain
import { submitEncryptedBid } from '../core/contract';
import { ethers } from 'ethers';

// Store signer externally to avoid React hook issues
let storedSigner: ethers.Signer | undefined = undefined;
let storedContractAddress = '';
let storedAbi: any = [];
let storedEntryFee = 0;

export function useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer }: {
  contractAddress: string;
  abi: any;
  entryFee: number;
  signer: ethers.Signer | undefined;
}) {
  // Update stored values without React hooks
  storedSigner = signer;
  storedContractAddress = contractAddress;
  storedAbi = abi;
  storedEntryFee = entryFee;

  const submit = async (encryptedBid: string) => {
    if (!storedSigner) {
      throw new Error('Signer not available');
    }
    return await submitEncryptedBid({ 
      contractAddress: storedContractAddress, 
      abi: storedAbi, 
      encryptedBid, 
      entryFee: storedEntryFee, 
      signer: storedSigner 
    });
  };

  return { submit };
}

// Usage:
// const { submit } = useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer });
// await submit(encryptedBid);

