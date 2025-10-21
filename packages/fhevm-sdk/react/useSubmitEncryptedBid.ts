// React hook for submitting encrypted bid onchain
import { useCallback, useRef } from 'react';
import { submitEncryptedBid } from '../core/contract';
import { ethers } from 'ethers';

export function useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer }: {
  contractAddress: string;
  abi: any;
  entryFee: number;
  signer: ethers.Signer | undefined;
}) {
  // Store signer in ref to avoid dependency issues
  const signerRef = useRef(signer);
  signerRef.current = signer;

  const submit = useCallback(async (encryptedBid: string) => {
    if (!signerRef.current) {
      throw new Error('Signer not available');
    }
    return await submitEncryptedBid({ contractAddress, abi, encryptedBid, entryFee, signer: signerRef.current });
  }, [contractAddress, abi, entryFee]);

  return { submit };
}

// Usage:
// const { submit } = useSubmitEncryptedBid({ contractAddress, abi, entryFee, signer });
// await submit(encryptedBid);
