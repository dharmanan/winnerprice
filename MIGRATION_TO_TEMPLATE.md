# WinnerPrice → fhevm-react-template Migration Guide

Bu guide, **WinnerPrice** (çalışan Vercel deploy'ı olan) uygulamasını **fhevm-react-template** repo'suna nasıl ekleyeceğini anlatıyor.

## 📋 Özet

WinnerPrice Vercel'de çalışan complete example olarak, fhevm-react-template'e eklenebilir. Sonuç: template repo'su production-ready example içerir.

---

## 🎯 Hedef Sonuç

```
fhevm-react-template/
├── examples/
│   ├── simple-encryption/    (existing)
│   ├── with-metadata/        (existing)
│   └── winner-price-auction/ (NEW - WinnerPrice)
│       ├── components/
│       ├── hooks/
│       ├── App.tsx
│       └── ... (complete WinnerPrice app)
```

---

## 📦 Dosyalar - Ne Kopyalanmalı?

### 1. App Components (`examples/winner-price-auction/components/`)

Kopyala (6 dosya):
```
✅ examples/nextjs-app/components/AuctionStatus.tsx
✅ examples/nextjs-app/components/Header.tsx
✅ examples/nextjs-app/components/ProductDisplay.tsx
✅ examples/nextjs-app/components/ProductSelector.tsx
✅ examples/nextjs-app/components/UserActions.tsx
✅ examples/nextjs-app/components/WinnerDisplay.tsx
```

### 2. Hooks (`examples/winner-price-auction/hooks/`)

Kopyala (1 dosya):
```
✅ examples/nextjs-app/hooks/useAuction.ts
```

### 3. Core Files (`examples/winner-price-auction/`)

Kopyala (5 dosya):
```
✅ examples/nextjs-app/App.tsx
✅ examples/nextjs-app/types.ts
✅ examples/nextjs-app/constants.ts
✅ examples/nextjs-app/index.tsx
✅ examples/nextjs-app/index.css
```

### 4. Config Files (`examples/winner-price-auction/`)

Kopyala (3 dosya):
```
✅ examples/nextjs-app/package.json
✅ examples/nextjs-app/tsconfig.json
✅ examples/nextjs-app/vite.config.ts
```

### 5. Public Assets (`examples/winner-price-auction/public/`)

Kopyala:
```
✅ examples/nextjs-app/public/ (all files)
   ├── index.html (if exists)
   ├── relayer-sdk-js.umd.js
   └── relayer-sdk-js.umd.cjs
```

### ❌ Kopyala MA - Root Dependencies

Şunları **KOPYALA MA**:
```
❌ package.json (root)    → fhevm-react-template'in kendi package.json'ı var
❌ pnpm-lock.yaml         → Template'in kendi dependencies yapısı var
❌ pnpm-workspace.yaml    → WinnerPrice'a özel workspace config
❌ vercel.json            → Deployment config (template'e göre customize)
❌ hardhat.config.js      → Contract deployment (template'e göre)
```

---

## 🔧 Adım-Adım Implementasyon

### Adım 1: Dosya Yapısını Oluştur

```bash
cd fhevm-react-template

# WinnerPrice örneği için dizin oluştur
mkdir -p examples/winner-price-auction/{components,hooks,public}
```

### Adım 2: Components Kopyala

```bash
# Kaynak: winnerprice/examples/nextjs-app
# Hedef: fhevm-react-template/examples/winner-price-auction

cp winnerprice/examples/nextjs-app/components/*.tsx \
   fhevm-react-template/examples/winner-price-auction/components/
```

### Adım 3: Core Files Kopyala

```bash
cp winnerprice/examples/nextjs-app/App.tsx \
   fhevm-react-template/examples/winner-price-auction/

cp winnerprice/examples/nextjs-app/types.ts \
   fhevm-react-template/examples/winner-price-auction/

cp winnerprice/examples/nextjs-app/constants.ts \
   fhevm-react-template/examples/winner-price-auction/

cp winnerprice/examples/nextjs-app/index.tsx \
   fhevm-react-template/examples/winner-price-auction/

cp winnerprice/examples/nextjs-app/index.css \
   fhevm-react-template/examples/winner-price-auction/
```

### Adım 4: Hooks Kopyala

```bash
cp winnerprice/examples/nextjs-app/hooks/useAuction.ts \
   fhevm-react-template/examples/winner-price-auction/hooks/
```

### Adım 5: Config Files Adapt Et

**`package.json`** - Yeni dosya oluştur:
```json
{
  "name": "winner-price-auction",
  "version": "1.0.0",
  "description": "FHE-powered privacy-preserving auction app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "ethers": "^5.7.2",
    "typescript": "^5.x"
  }
}
```

**`vite.config.ts`** - Yeni dosya oluştur:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
```

**`tsconfig.json`** - Yeni dosya oluştur:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Adım 6: Public Assets Kopyala

```bash
mkdir -p fhevm-react-template/examples/winner-price-auction/public

cp winnerprice/examples/nextjs-app/public/* \
   fhevm-react-template/examples/winner-price-auction/public/
```

### Adım 7: README Oluştur

**`examples/winner-price-auction/README.md`**:
```markdown
# WinnerPrice - FHE Auction Example

Complete production-ready FHE auction application.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Features

- ✅ Real FHEVM encryption (Zama Relayer SDK)
- ✅ MetaMask wallet integration
- ✅ Privacy-preserving auction mechanism
- ✅ Winner calculation from encrypted bids
- ✅ Sepolia testnet compatible

## Key Files

- `App.tsx` - Main application component
- `hooks/useAuction.ts` - Auction state management
- `components/UserActions.tsx` - Bid submission logic
- `types.ts` - TypeScript interfaces

## Environment

```env
VITE_RELAYER_ENDPOINT=https://relayer.testnet.zama.cloud
VITE_AUCTION_CONTRACT=0xb6E160B1ff80D67Bfe90A85eE06Ce0A2613607D1
```

## Deployment

### Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables
4. Deploy!

Live example: https://winnerprice.vercel.app

## Documentation

See `DEVELOPMENT_SUMMARY.md` in winnerprice repo for:
- Complete architecture
- All issues and solutions
- Best practices
- Performance details
```

---

## 🔗 Import Path Değişiklikleri

WinnerPrice'da `fhevm-sdk` package'ı konumu:
```typescript
// WinnerPrice'da (monorepo yapısı):
import { getEncryptBid } from '../../../packages/fhevm-sdk/react/useEncryptBid';

// fhevm-react-template'de AYNI kalabilir VEYA:
import { getEncryptBid } from '../path/to/fhevm-sdk/react/useEncryptBid';
```

**Çözüm:** 
- Eğer `fhevm-sdk` template'in packages/'inde ise: paths ayarla
- Veya relative imports düzelt:
  ```typescript
  // Seçenek 1: Root package'ı import et
  import { getEncryptBid } from '@fhevm-sdk/react/useEncryptBid';
  
  // Seçenek 2: Relative path düzelt
  import { getEncryptBid } from '../../packages/fhevm-sdk/react/useEncryptBid';
  ```

---

## ✅ Kontrol Listesi

- [ ] Dizin yapısı oluşturuldu
- [ ] Components (6 dosya) kopyalandı
- [ ] Hooks (1 dosya) kopyalandı
- [ ] Core files (5 dosya) kopyalandı
- [ ] Config files (3 dosya) adapted
- [ ] Public assets kopyalandı
- [ ] README oluşturuldu
- [ ] Import paths kontrol edildi
- [ ] Dependencies yüklendi: `npm install`
- [ ] Dev server test edildi: `npm run dev`
- [ ] Build test edildi: `npm run build`

---

## 🧪 Test Sonrası

```bash
# Development test
cd examples/winner-price-auction
npm install
npm run dev
# → Açılabilmeli: http://localhost:5173

# Production test
npm run build
npm run preview
# → Açılabilmeli: http://localhost:4173
```

---

## 📝 Git Commit

```bash
git add examples/winner-price-auction/
git commit -m "feat: add WinnerPrice FHE auction example

- Complete production-ready FHE auction application
- Real FHEVM encryption with Zama Relayer SDK
- MetaMask wallet integration
- Privacy-preserving bid mechanism
- Winner calculation from encrypted bids
- Live on https://winnerprice.vercel.app"

git push origin main
```

---

## 🎯 Sonuç

fhevm-react-template artık:
- ✅ Basit encryption örneği (existing)
- ✅ Metadata örneği (existing)
- ✅ **Complete auction app** (NEW - WinnerPrice) ← Production-ready!

Users'lar gerçek, working example'ı görebilir ve kendi uygulamalarını bunun üzerine inşa edebilir.

---

## 📞 İhtiyaç Duyulursa

Sorun varsa:
1. Import paths kontrol et
2. Dependencies uyumunu kontrol et
3. Environment variables ayarla
4. Browser console'dan hataları kontrol et

---

**Happy deploying! 🚀**
