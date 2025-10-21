# FHE Auction - WinnerPrice Example Integration

Bu document, **winnerprice** repo'sundaki production-ready FHE auction uygulamasını `fhevm-react-template`'e integrate etmeniz için gerekli adımları içerir.

---

## 🎯 Amaç

`fhevm-react-template`'in içine **çalışan bir production example** eklemek:

```
examples/
├── simple-encryption/     (existing)
├── with-metadata/         (existing)
└── fhe-auction/          (NEW - WinnerPrice referansı)
```

---

## 📚 Reference Repository

**WinnerPrice repo:** https://github.com/dharmanan/winnerprice

Bu repo:
- ✅ **Vercel'de deploy'lanmış:** https://winnerprice.vercel.app
- ✅ **Production-ready:** Tüm bugları fixed
- ✅ **Fully documented:** README, DEVELOPMENT_SUMMARY.md, MIGRATION_TO_TEMPLATE.md
- ✅ **Real FHEVM:** Zama Relayer SDK ile çalışan encryption
- ✅ **MetaMask integrated:** Wallet signing required

**Kullanılan teknolojiler:**
```
React 19 | Vite 6 | TypeScript | Tailwind CSS | ethers.js | Zama FHEVM
```

---

## 🚀 Quick Start - Kendi Example'ını Oluştur

### Adım 1: Dosya Yapısını Kur

```bash
cd examples
mkdir -p fhe-auction/{components,hooks,public}
cd fhe-auction
```

### Adım 2: Kaynak Dosyaları Referans Al

**WinnerPrice repo'sundaki kaynaklar:**

```
winnerprice/examples/nextjs-app/
├── components/
│   ├── AuctionStatus.tsx
│   ├── Header.tsx
│   ├── ProductDisplay.tsx
│   ├── ProductSelector.tsx
│   ├── UserActions.tsx
│   └── WinnerDisplay.tsx
├── hooks/
│   └── useAuction.ts
├── App.tsx
├── types.ts
├── constants.ts
├── index.tsx
├── index.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

**Referans:** [winnerprice - nextjs-app](https://github.com/dharmanan/winnerprice/tree/main/examples/nextjs-app)

### Adım 3: Kendi Components'ini Oluştur

Şablonlar olarak WinnerPrice'ı referans al:

**1. `components/AuctionStatus.tsx`**
```typescript
// Referans: winnerprice/examples/nextjs-app/components/AuctionStatus.tsx
// Auction timer ve katılımcı sayısı gösteren component
```

**2. `components/UserActions.tsx`** (En önemli)
```typescript
// Referans: winnerprice/examples/nextjs-app/components/UserActions.tsx
// Key features:
// - getEncryptBid() non-hook function kullanımı (context hatası olmaz)
// - useSubmitEncryptedBid hook ile MetaMask integration
// - Bid encryption ve submission flow
```

**3. `components/WinnerDisplay.tsx`**
```typescript
// Referans: winnerprice/examples/nextjs-app/components/WinnerDisplay.tsx
// - Props-based rendering (no hooks - no context errors)
// - Winner information display
```

### Adım 4: Hooks - State Management

**`hooks/useAuction.ts`** - Referans:
```typescript
// winnerprice/examples/nextjs-app/hooks/useAuction.ts
// 
// Handleler:
// - performFHEEncryption() - Real FHEVM encryption
// - useAuction() hook - State management
// - joinAuction, submitBid, revealWinner functions
// - simulateFullAuction - Demo için 9 bid simulation
```

**Key Pattern:**
```typescript
// ✅ Non-hook function (context-free):
export function getEncryptBid() {
  const encrypt = async (value: number) => {
    const relayerSDK = window.relayerSDK;
    await relayerSDK.initSDK();
    // ... encryption logic
    return encrypted;
  };
  return { encrypt };
}

// ✅ Hook version (inside provider):
export function useEncryptBid() {
  const { sdk } = useFHEVMRelayer();
  const encrypt = useCallback(async (value) => {
    // ... encryption with context
  }, [sdk]);
  return { encrypt };
}
```

### Adım 5: Core Files

**`App.tsx`** - Referans:
```typescript
// winnerprice/examples/nextjs-app/App.tsx
// 
// Main component structure:
// - Product selection
// - Auction status display
// - UserActions component (join/bid/reveal)
// - WinnerDisplay component (when revealed)
```

**`types.ts`** - Referans:
```typescript
// winnerprice/examples/nextjs-app/types.ts
// TypeScript interfaces:
// - AuctionState enum
// - UserState enum
// - Winner, Bid, Product types
```

**`constants.ts`** - Referans:
```typescript
// winnerprice/examples/nextjs-app/constants.ts
// - PRODUCTS array
// - AUCTION_DURATION_SECONDS
// - MIN_BID, MAX_BID
// - MAX_PARTICIPANTS
```

### Adım 6: Configuration

**`package.json`**
```json
{
  "name": "fhe-auction-example",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "ethers": "^5.7.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "vite": "^6.x",
    "typescript": "^5.x"
  }
}
```

**`vite.config.ts`** - Referans:
```typescript
// winnerprice/examples/nextjs-app/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
})
```

**`tsconfig.json`** - Referans:
```json
// winnerprice/examples/nextjs-app/tsconfig.json
```

---

## 🔗 Import Paths - SDK Integration

**Zama FHEVM SDK'yı nasıl import etmeli:**

```typescript
// Seçenek 1: Template'in kendi packages/ struktur'ı varsa
import { getEncryptBid } from '../../../packages/fhevm-sdk/react/useEncryptBid';

// Seçenek 2: Path alias varsa (tsconfig.json'da)
import { getEncryptBid } from '@fhevm-sdk/react/useEncryptBid';

// Seçenek 3: Node modules'dan
import { useFHEVMRelayer } from '@zama-fhevm-sdk/react';
```

**WinnerPrice'da nasıl yapıldı:**
```typescript
// winnerprice/examples/nextjs-app/components/UserActions.tsx
import { getEncryptBid } from '../../../packages/fhevm-sdk/react/useEncryptBid';
import { useSubmitEncryptedBid } from '../../../packages/fhevm-sdk/react/useSubmitEncryptedBid';
```

---

## 🔧 Critical Implementation Details

### 1. Context Error Avoidance
❌ **YANLIŞ:**
```typescript
// This causes: "Cannot read properties of null (reading 'useCallback')"
const UserActions = () => {
  const { encrypt } = useEncryptBid(); // ← Hook outside provider!
  // ...
}
```

✅ **DOĞRU:**
```typescript
// Use non-hook function in components outside context
const UserActions = () => {
  const { encrypt } = getEncryptBid(); // ← No context needed!
  // ...
}
```

### 2. MetaMask Integration
```typescript
// UserActions.tsx'de bidding flow:
const onBidClick = async () => {
  const encryptedBid = await encrypt(bidAmount);     // Step 1: Encrypt
  await submit(encryptedBid);                         // Step 2: MetaMask popup
  onSubmitBid();                                      // Step 3: Update state
}
```

### 3. Real FHEVM Encryption
```typescript
// hooks/useAuction.ts
const performFHEEncryption = async (value: number) => {
  const relayerSDK = window.relayerSDK;
  await relayerSDK.initSDK();
  const config = relayerSDK.SepoliaConfig;
  const instance = await relayerSDK.createInstance(config);
  const encryptedInput = instance.createEncryptedInput(contractAddress, userAddress);
  const encrypted = await encryptedInput.add256(BigInt(value)).encrypt();
  return encrypted;
}
```

---

## 📊 Architecture Overview

```
index.tsx (AppWrapper)
    ↓
  App.tsx (useAuction hook)
    ↓
  ├─ ProductSelector
  ├─ ProductDisplay
  ├─ AuctionStatus
  └─ UserActions (non-hook getEncryptBid)
      ├─ Join button → joinAuction()
      ├─ Bid input → encrypt() + submit()
      ├─ Simulate button → simulateFullAuction()
      └─ Reveal button → revealWinner()
        ↓
      WinnerDisplay (props-based, no hooks)
```

---

## 🧪 Testing

```bash
# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

**Expected Flow:**
1. ✅ Connect wallet (MetaMask)
2. ✅ Select product
3. ✅ Join auction (signature required)
4. ✅ Enter bid amount
5. ✅ Submit bid (signature required)
6. ✅ Simulate auction (add 9 more bids)
7. ✅ Reveal winner (local calculation, no decryption)

---

## 📚 Complete Reference

**WinnerPrice repo'sunda tüm detaylar var:**

- **README_LATEST.md** - 400+ satır complete documentation
  - Project overview
  - Tech stack
  - Quick start
  - Deployment
  - Security details
  
- **DEVELOPMENT_SUMMARY.md** - 500+ satır technical deep-dive
  - All issues ve solutions
  - Architecture patterns
  - Performance metrics
  - Best practices

- **Source code** - Production-ready implementation
  - Real working components
  - Tested flows
  - Error handling
  - Responsive UI

**GitHub:** https://github.com/dharmanan/winnerprice

---

## 🎯 Checklist

- [ ] Dosya yapısını kur (components/, hooks/)
- [ ] WinnerPrice repo'sunu referans olarak aç
- [ ] Components'leri adapt et (UserActions.tsx most important)
- [ ] useAuction hook'u implement et
- [ ] App.tsx'i oluştur
- [ ] types.ts ve constants.ts yaz
- [ ] package.json ve vite.config.ts kur
- [ ] `npm install` çalıştır
- [ ] `npm run dev` test et
- [ ] `npm run build` test et
- [ ] Local Vercel deploy test et (optional)

---

## 🚀 Deployment (Optional)

Eğer Vercel'de deploy etmek istersen:

```bash
# 1. GitHub'a push et
git push origin main

# 2. Vercel Dashboard'dan bağla
# Settings → Root Directory: examples/fhe-auction

# 3. Environment variables kur
VITE_RELAYER_ENDPOINT=https://relayer.testnet.zama.cloud
VITE_AUCTION_CONTRACT=0x...

# 4. Deploy et!
```

---

## 🤝 Integration Notes

1. **Bu örnek WinnerPrice repo'sunun devamı olarak düşün**
   - Referans al, adapt et, kendi versiyonunu yap
   - Bugları fix ettin, patterns'i öğren

2. **Context errors'dan kaç**
   - getEncryptBid() (non-hook) vs useEncryptBid() (hook)
   - Components'i context provider'ın içine al

3. **MetaMask integration önemli**
   - Her state-changing işlemde signature required
   - User başlatmalı (button click)

4. **Real FHEVM güvenliği**
   - Client-side WASM encryption
   - Server asla plaintext görmez
   - Testnet üzerinde demo

---

**Ready to build? Start with winnerprice as reference! 🚀**

**Referans Repository:** https://github.com/dharmanan/winnerprice  
**Live Example:** https://winnerprice.vercel.app
