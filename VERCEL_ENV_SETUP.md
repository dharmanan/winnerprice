# Vercel Environment Variables Setup

## Vercel Dashboard'da şu variables'ları ekle:

### Production Environment Variables

```
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

### Optional (defaults work if not set)
- `NEXT_PUBLIC_ALCHEMY_API_KEY`: Alchemy API key for blockchain RPC
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: WalletConnect project ID for wallet connection

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
