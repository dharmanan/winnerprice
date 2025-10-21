# Vercel Environment Variables Setup

# Vercel Environment Variables Setup

## Vercel Dashboard'da şu variables'ları ekle:

### FHEVM Relayer Configuration (REQUIRED)

```
NEXT_PUBLIC_RELAYER_ENDPOINT=https://relayer.testnet.zama.cloud
NEXT_PUBLIC_RELAYER_API_KEY=DEMO_API_KEY
NEXT_PUBLIC_RELAYER_PUBLIC_KEY=0x047f04b2a7bbf9084c7f1a6e7e8c8a5a8d1f5e6f6b2b4d8c3f1a2b7a6e7f8b9c2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8
NEXT_PUBLIC_RELAYER_PUBLIC_KEY_ID=sepolia-0.1
```

### Optional Wallet Variables

```
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

## Nasıl Vercel'e ekleyelim:

1. **Vercel Dashboard'a git**: https://vercel.com/dashboard
2. **Proje seç**: winnerprice
3. **Settings** → **Environment Variables**
4. Aşağıdaki variables'ları ekle:

### Example Values (DEMO - values below):

```
NEXT_PUBLIC_ALCHEMY_API_KEY=https://eth-sepolia.g.alchemy.com/v2/demo
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=demo123456789
```

5. **Redeploy** yap ya da yeni push yap

## Test et:

Production URL'de F12 → Console → 
```javascript
console.log('API Key:', process.env.NEXT_PUBLIC_ALCHEMY_API_KEY)
console.log('WC ID:', process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID)
```

## Önemli:

- NEXT_PUBLIC_ prefix olmayan variables client-side'da erişilemez
- Vercel production/preview/development için ayrı variables'lar tutabilir
- Değişiklikten sonra Redeploy gerekir
