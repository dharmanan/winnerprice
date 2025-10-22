// ...existing code...
import type { FhevmInstanceConfig } from '../src/fhevmTypes';
// window globalı TypeScript için declare ediliyor
declare var window: any;
// React hook for FHEVM bid encryption
import { useCallback } from 'react';
import { encryptBid } from '../core/encrypt';

// Non-hook version - just returns the encryption function without state
export function getEncryptBid() {
  const encrypt = async (value: number) => {
    try {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      if (!win || !win.relayerSDK) throw new Error('Relayer SDK global modul bulunmadi!');
      const relayerSDK = win.relayerSDK;
      
      // ÖNEMLI: WASM'i initialize et (ilk çağrı sırasında)
      try {
        await relayerSDK.initSDK();
      } catch (initErr) {
      }
      
      // Sadece SDK'nin sağladığı SepoliaConfig'i direkt kullan
      const config = relayerSDK.SepoliaConfig;
      
      
      // Instance olustur
      const instance = await relayerSDK.createInstance(config);
      
      // createEncryptedInput'u kullan (SDK'nin doğru API'si)
      if (!instance.createEncryptedInput || typeof instance.createEncryptedInput !== 'function') {
        throw new Error('FHEVM SDK instance createEncryptedInput fonksiyonu yok!');
      }
      
      // Contract adresi gerekli - config'den al
      const contractAddress = config.verifyingContractAddressDecryption;
      if (!contractAddress) {
        throw new Error('Contract address not configured!');
      }
      
      // User adresi (MetaMask'ten veya mock'dan)
      let userAddress = '0x0000000000000000000000000000000000000000';
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        try {
          const accounts = await (window as any).ethereum.request({ 
            method: 'eth_accounts' 
          });
          if (accounts && accounts.length > 0) {
            userAddress = accounts[0];
          }
        } catch (e) {
        }
      }
      
      
      const encryptedInput = instance.createEncryptedInput(contractAddress, userAddress);
      
      // euint256 ekleme (256-bit unsigned integer)
      const inputWithBid = encryptedInput.add256(BigInt(value));
      
      // Şifrele ve gönder
      const encrypted = await inputWithBid.encrypt();
      
      return encrypted;
    } catch (err) {
      console.error('[DEBUG] ❌ Hata:', err);
      throw err;
    }
  };
  
  return { encrypt };
}

// React hook version - uses useCallback for memoization
export function useEncryptBid() {
  const encrypt = useCallback(async (value: number) => {
    try {
      const win = typeof window !== 'undefined' ? (window as any) : undefined;
      if (!win || !win.relayerSDK) throw new Error('Relayer SDK global modul bulunmadi!');
      const relayerSDK = win.relayerSDK;
      
      // ÖNEMLI: WASM'i initialize et (ilk çağrı sırasında)
      try {
        await relayerSDK.initSDK();
      } catch (initErr) {
      }
      
      // Sadece SDK'nin sağladığı SepoliaConfig'i direkt kullan
      const config = relayerSDK.SepoliaConfig;
      
      
      // Instance olustur
      const instance = await relayerSDK.createInstance(config);
      
      // createEncryptedInput'u kullan (SDK'nin doğru API'si)
      if (!instance.createEncryptedInput || typeof instance.createEncryptedInput !== 'function') {
        throw new Error('FHEVM SDK instance createEncryptedInput fonksiyonu yok!');
      }
      
      // Contract adresi gerekli - config'den al
      const contractAddress = config.verifyingContractAddressDecryption;
      if (!contractAddress) {
        throw new Error('Contract address not configured!');
      }
      
      // User adresi (MetaMask'ten veya mock'dan)
      let userAddress = '0x0000000000000000000000000000000000000000';
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        try {
          const accounts = await (window as any).ethereum.request({ 
            method: 'eth_accounts' 
          });
          if (accounts && accounts.length > 0) {
            userAddress = accounts[0];
          }
        } catch (e) {
        }
      }
      
      
      const encryptedInput = instance.createEncryptedInput(contractAddress, userAddress);
      
      // euint256 ekleme (256-bit unsigned integer)
      const inputWithBid = encryptedInput.add256(BigInt(value));
      
      // Şifrele ve gönder
      const encrypted = await inputWithBid.encrypt();
      
      return encrypted;
    } catch (err) {
      console.error('[DEBUG] ❌ Hata:', err);
      throw err;
    }
  }, []);

  return { encrypt };
}

// Usage:
// const { encrypt } = useEncryptBid();
// const encryptedBid = await encrypt(12500);
