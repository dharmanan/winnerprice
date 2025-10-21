// React hook for submitting encrypted bid onchain
import { useCallback } from 'react';
import { submitEncryptedBid } from '../core/contract';
import { ethers } from 'ethers';

export function useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer }: {
  contractAddress: string;
  abi: any;
  entryFee: number;
  signer: ethers.Signer | undefined;
}) {
  const submit = useCallback(async (encryptedBid: string) => {
    if (!signer) {
      throw new Error('Signer not available');
    }
    return await submitEncryptedBid({ contractAddress, abi, encryptedBid, entryFee, signer });
  }, [contractAddress, abi, entryFee, signer]);

  return { submit };
}

// Usage:
// const { submit } = useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer });
// await submit(encryptedBid);
