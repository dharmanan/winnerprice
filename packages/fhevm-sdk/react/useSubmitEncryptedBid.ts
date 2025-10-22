// Non-hook function for submitting encrypted bid onchain
import { submitEncryptedBid } from '../core/contract';
import { ethers } from 'ethers';

/**
 * Non-hook function to submit encrypted bid
 * Use this instead of hooks to avoid React context errors during re-renders
 * 
 * @param contractAddress - Smart contract address
 * @param abi - Contract ABI
 * @param encryptedBid - Encrypted bid value
 * @param entryFee - Entry fee amount
 * @param signer - Ethers signer from wallet
 * @returns Promise that resolves when bid is submitted
 */
export async function getSubmitEncryptedBid(
  contractAddress: string,
  abi: any,
  encryptedBid: string,
  entryFee: number,
  signer: ethers.Signer | undefined
) {
  if (!signer) {
    throw new Error('Signer not available');
  }
  if (!contractAddress) {
    throw new Error('Contract address not configured');
  }

  return await submitEncryptedBid({
    contractAddress,
    abi,
    encryptedBid,
    entryFee,
    signer
  });
}

// Legacy hook wrapper for backward compatibility
// Avoid using this - use getSubmitEncryptedBid instead
export function useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer }: {
  contractAddress: string;
  abi: any;
  entryFee: number;
  signer: ethers.Signer | undefined;
}) {
  const submit = async (encryptedBid: string) => {
    return await getSubmitEncryptedBid(contractAddress, abi, encryptedBid, entryFee, signer);
  };

  return { submit };
}

