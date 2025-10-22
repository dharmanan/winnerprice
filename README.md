# WinnerPrice - FHE Auction App 🏆# WinnerPrice - FHE Auction App 🏆# 🔐 FHEVM Universal SDK - Framework-Agnostic Implementation



[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-blue?logo=vercel)](https://winnerprice.vercel.app)

[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[![Tech Stack](https://img.shields.io/badge/Tech-React%2019%20%7C%20Vite%20%7C%20FHEVM-purple)](examples/nextjs-app/package.json)[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-blue?logo=vercel)](https://winnerprice.vercel.app)> **A production-ready, framework-agnostic FHEVM SDK for building encrypted dApps across React, Vue.js, Node.js, and Vanilla JavaScript.**



> A **production-ready** privacy-preserving auction application powered by **Fully Homomorphic Encryption (FHE)** using Zama's FHEVM technology.[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)



**🌐 Live Demo:** [https://winnerprice.vercel.app](https://winnerprice.vercel.app)  [![Tech Stack](https://img.shields.io/badge/Tech-React%2019%20%7C%20Vite%20%7C%20FHEVM-purple)](examples/nextjs-app/package.json)Build secure, encrypted applications with **real Fully Homomorphic Encryption** (FHEVM) - works seamlessly whether you're building with React, Vue, Node.js, or plain JavaScript. Zero framework coupling, maximum flexibility.

**📖 Documentation:** Read below or see [DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md)



---

> A **production-ready** privacy-preserving auction application powered by **Fully Homomorphic Encryption (FHE)** using Zama's FHEVM technology.**✨ Status:** Production-ready with 4 complete framework examples, comprehensive documentation, and real FHEVM integration.

## ⚡ Quick Start



```bash

# Clone repository**🌐 Live Demo:** [https://winnerprice.vercel.app](https://winnerprice.vercel.app)  ---

git clone https://github.com/dharmanan/winnerprice

cd winnerprice**📖 Documentation:** Read below or see [DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md)



# Install dependencies## 📚 Documentation Quick Links

pnpm install

---

# Navigate to app

cd examples/nextjs-appChoose your path based on what you need:



# Start development server## ⚡ Quick Start

pnpm dev

```| Your Goal | Document | Time | Best For |



Open [http://localhost:5173](http://localhost:5173)```bash|-----------|----------|------|----------|



---# Clone repository| **🚀 Get Started Now** | [GETTING_STARTED.md](./GETTING_STARTED.md) | 5 min | First-time users |



## 📋 About This Projectgit clone https://github.com/dharmanan/winnerprice| **🏗️ Understand Design** | [ARCHITECTURE.md](./packages/fhevm-sdk/ARCHITECTURE.md) | 10 min | Developers & architects |



### What is WinnerPrice?cd winnerprice| **📖 Full API Reference** | [API_REFERENCE.md](./packages/fhevm-sdk/API_REFERENCE.md) | 15 min | Deep dives & integration |



A privacy-preserving auction where:| **🎯 Implementation Details** | [ZAMA_BOUNTY_SUBMISSION.md](./ZAMA_BOUNTY_SUBMISSION.md) | 10 min | Requirements & scope |

- ✅ All bids are **encrypted with FHEVM** - mathematically secure, never decrypted until reveal

- ✅ Secret target price is **never revealed** during bidding# Install dependencies| **🔍 Real-World Examples** | [SIMULATE_REAL_FHEVM.md](./SIMULATE_REAL_FHEVM.md) | 8 min | Encryption examples |

- ✅ Winner is determined by **closest bid** to the secret price

- ✅ MetaMask wallet integration for **transaction signing**pnpm install

- ✅ Real WASM-based encryption on client-side

---

### Example Flow

```# Navigate to app

1. User joins auction (pays entry fee, requires MetaMask signature)

2. User enters bid amount (stays private, encrypted with FHEVM)cd examples/nextjs-app## 🎯 Choose Your Framework

3. System simulates 9 additional participant bids (all encrypted)

4. Auction ends automatically

5. Click "Reveal Winner" to see winner without ever decrypting bids

```# Start development serverThe FHEVM SDK is **completely framework-agnostic** - the core encryption logic has zero dependencies. Pick your JavaScript environment and start encrypting in minutes:



---pnpm dev



## ⚠️ Important: Architecture & Scope```| Framework | Type | Setup | Best For | Status | Start |



### What This Project IS ✅|-----------|------|-------|----------|--------|-------|

- **Production-ready working example** of FHE-based auction logic

- **Real client-side FHEVM encryption** using Zama Relayer SDK (v0.2.0)Open [http://localhost:5173](http://localhost:5173)| **React + Next.js** | Frontend | 2 min | Modern web apps with routing | ✅ Production | [nextjs-app](./examples/nextjs-app) |

- **Functional concept implementation** showing FHE auction workflow

- **Ready for testing & demonstration** on Sepolia testnet| **Vue 3** | Frontend | 2 min | Composition API, SFC support | ✅ Production | [vue-example](./examples/vue-example) |

- **Foundation for future on-chain reveal** implementation

---| **Node.js** | Backend | 1 min | CLI, batch processing, CI/CD | ✅ Production | [node-example](./examples/node-example) |

### What This Project IS NOT ❌

- **Full on-chain FHE computation** - Winner reveal is client-side (local computation)| **Vanilla JS** | Frontend | 0 min | No build, GitHub Pages, instant | ✅ Production | [vanilla-js-example](./examples/vanilla-js-example) |

- **Mainnet-ready** - Currently deployed on Sepolia testnet only

- **Complete FHE solution** - Demonstrates encryption flow, not full FHE operations on-chain## ✨ What is WinnerPrice?

- **Production auction system** - Proof of concept for educational/demonstration purposes

**All examples are identical functionally - they share the same:**

### Future: Zama v0.9 & Beyond 🚀

A privacy-preserving auction where:- ✅ Real FHEVM encryption (Relayer SDK v0.2.0)

This implementation is **designed to be upgraded** when Zama releases:

- **FHEVM v0.9** - On-chain FHE key generation & computation- ✅ All bids are **encrypted with FHEVM** - mathematically secure, never decrypted until reveal- ✅ Multi-bid auction (1 manual + 9 simulated bids)

- **Relayer SDK v0.3.0+** - Enhanced on-chain reveal capabilities

- **Full homomorphic computation** - Direct FHE operations on blockchain- ✅ Secret target price is **never revealed** during bidding- ✅ TypeScript support (strict mode ready)



**Upgrade path ready:** The current architecture supports migration to full on-chain FHE without major refactoring.- ✅ Winner is determined by **closest bid** to the secret price- ✅ Error handling & logging



---- ✅ MetaMask wallet integration for **transaction signing**- ✅ Copy-paste ready, production code



## 🎯 Key Features- ✅ Real WASM-based encryption on client-side



| Feature | Status | Details |---

|---------|--------|---------|

| **FHE Encryption** | ✅ Live | Real Zama FHEVM Relayer SDK with WASM |### Example Flow

| **MetaMask Integration** | ✅ Live | Wallet connection & transaction signing |

| **Sepolia Testnet** | ✅ Live | Ethereum testnet deployment |```## ⚡ 2-Minute Quick Start

| **Responsive UI** | ✅ Live | Tailwind CSS with mobile support |

| **Auto-Deployment** | ✅ Live | GitHub → Vercel auto-deploy pipeline |1. User joins auction (pays entry fee, requires MetaMask signature)

| **Winner Reveal** | ✅ Live | Client-side computation (ready for on-chain upgrade) |

| **Bid Simulation** | ✅ Live | Simulate realistic auctions with 10 encrypted bids |2. User enters bid amount (stays private, encrypted with FHEVM)# WinnerPrice - FHE Auction App 🏆



---3. System simulates 9 additional participant bids (all encrypted)



## 🛠️ Tech Stack4. Auction ends automatically[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-blue?logo=vercel)](https://winnerprice.vercel.app)



```5. Click "Reveal Winner" to see winner without ever decrypting bids[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Frontend:    React 19.0.0

Build:       Vite 6.4.0```[![Tech Stack](https://img.shields.io/badge/Tech-React%2019%20%7C%20Vite%20%7C%20FHEVM-purple)](examples/nextjs-app/package.json)

Styling:     Tailwind CSS 3.x

Crypto:      Zama FHEVM Relayer SDK 0.2.0

Web3:        ethers.js 5.7.2

Network:     Ethereum Sepolia Testnet---> A **production-ready** privacy-preserving auction application powered by **Fully Homomorphic Encryption (FHE)** using Zama's FHEVM technology. Real working example for building encrypted dApps.

Deployment:  Vercel (auto-deploy on push)

Language:    TypeScript 5.x

```

## 🎯 Key Features**🌐 Live Demo:** [https://winnerprice.vercel.app](https://winnerprice.vercel.app)

---



## 📂 Project Structure

| Feature | Status | Details |---

```

winnerprice/|---------|--------|---------|

├── examples/nextjs-app/              # Main React application

│   ├── components/                   # UI components| **FHE Encryption** | ✅ Live | Real Zama FHEVM Relayer SDK with WASM |## 📖 Documentation

│   │   ├── AuctionStatus.tsx        # Timer & participant display

│   │   ├── Header.tsx               # App header| **MetaMask Integration** | ✅ Live | Wallet connection & transaction signing |

│   │   ├── ProductDisplay.tsx       # Product showcase

│   │   ├── ProductSelector.tsx      # Product selection| **Sepolia Testnet** | ✅ Live | Ethereum testnet deployment || Document | Purpose | Read Time |

│   │   ├── UserActions.tsx          # Join/Bid/Reveal controls

│   │   └── WinnerDisplay.tsx        # Winner information| **Responsive UI** | ✅ Live | Tailwind CSS with mobile support ||----------|---------|-----------|

│   ├── hooks/

│   │   └── useAuction.ts            # State management| **Auto-Deployment** | ✅ Live | GitHub → Vercel auto-deploy pipeline || **[DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md)** | Complete technical guide, all issues & solutions | 15 min |

│   ├── App.tsx                       # Main component

│   ├── types.ts                     # TypeScript interfaces| **Winner Reveal** | ✅ Live | Local computation (no onchain decryption needed) || **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** | How to use as reference for own project | 10 min |

│   ├── constants.ts                 # Product definitions

│   └── vite.config.ts               # Build config| **Bid Simulation** | ✅ Live | Simulate realistic auctions with 10 encrypted bids || **[README_LATEST.md](./README_LATEST.md)** | Full feature documentation & deployment | 10 min |

│

├── packages/

│   └── fhevm-sdk/                    # FHEVM SDK package

│       ├── core/                     # Non-hook functions------

│       │   ├── encrypt.ts            # Bid encryption

│       │   └── relayer.ts            # Relayer SDK wrapper

│       └── react/                    # React hooks

│           ├── useEncryptBid.ts      # getEncryptBid() + hook## 🛠️ Tech Stack## ⚡ Quick Start

│           ├── useDecryptWinner.ts   # Winner decryption

│           └── useSubmitEncryptedBid.ts

│

└── docs/``````bash

    ├── DEVELOPMENT_SUMMARY.md        # Technical deep-dive (all issues & solutions)

    └── README_LATEST.md              # Full feature documentationFrontend:    React 19.0.0# Clone repository

```

Build:       Vite 6.4.0git clone https://github.com/dharmanan/winnerprice

---

Styling:     Tailwind CSS 3.xcd winnerprice

## 📖 Documentation

Crypto:      Zama FHEVM Relayer SDK 0.2.0

| Document | Purpose | Time |

|----------|---------|------|Web3:        ethers.js 5.7.2# Install dependencies

| **[DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md)** | Technical guide, all issues & solutions, architecture patterns | 15 min |

| **[README_LATEST.md](./README_LATEST.md)** | Full feature documentation, deployment, security details | 10 min |Network:     Ethereum Sepolia Testnetpnpm install



---Deployment:  Vercel (auto-deploy on push)



## 🚀 DeploymentLanguage:    TypeScript 5.x# Navigate to app



### Vercel (Current - Live)```cd examples/nextjs-app

```bash

# Auto-deploy on push to main

# Manual redeploy: Vercel Dashboard → Redeploy button

```---# Start development server



### Environment Variablespnpm dev

```env

VITE_RELAYER_ENDPOINT=https://relayer.testnet.zama.cloud## 📂 Project Structure```

VITE_AUCTION_CONTRACT=0xb6E160B1ff80D67Bfe90A85eE06Ce0A2613607D1

```



---```Open [http://localhost:5173](http://localhost:5173)



## 🔐 Securitywinnerprice/



- **Client-side encryption:** WASM-based real FHE, not mock├── examples/nextjs-app/              # Main React application---

- **Zero-knowledge:** Server never sees plaintext bids

- **Zama Relayer:** Handles encryption key management│   ├── components/                   # UI components

- **MetaMask signing:** Required for all state changes

- **Testnet only:** Current deployment on Sepolia (demo/testing)│   │   ├── AuctionStatus.tsx        # Timer & participant display## ✨ What is WinnerPrice?



---│   │   ├── Header.tsx               # App header



## 🧪 Usage│   │   ├── ProductDisplay.tsx       # Product showcase---



### Connect Wallet│   │   ├── ProductSelector.tsx      # Product selection

```

Click "Connect Wallet" → Approve MetaMask popup│   │   ├── UserActions.tsx          # Join/Bid/Reveal controls## 🌐 Live Demo

```

│   │   └── WinnerDisplay.tsx        # Winner information

### Select Product & Join

```│   ├── hooks/Want to see it in action? Deploy the React + Next.js example to Vercel with one click:

Select a product → Click "Join Auction" → Confirm MetaMask signature

```│   │   └── useAuction.ts            # State management



### Place Encrypted Bid│   ├── App.tsx                       # Main component[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/dharmanan/vercel-winnerprice)

```

Enter bid amount ($1,000-$50,000) → Click "Submit My Encrypted Bid"│   ├── types.ts                     # TypeScript interfaces

Bid encrypted with FHEVM → MetaMask signature required

```│   ├── constants.ts                 # Product definitions**Other frameworks** (Vue, Vanilla JS, Node.js) can be run locally - see [Getting Started](#-getting-started) section.



### Reveal Winner│   └── vite.config.ts               # Build config

```

Click "Reveal Winner" → Winner calculated from closest bid│---

No bids ever decrypted - winner determined locally (future: on-chain)

```├── packages/



---│   └── fhevm-sdk/                    # FHEVM SDK package## 🔐 What is FHEVM?



## ⚠️ Known Limitations│       ├── core/                     # Non-hook functions



1. **Testnet Only** - Currently on Sepolia testnet (demo purposes)│       │   ├── encrypt.ts            # Bid encryption**Fully Homomorphic Encryption Virtual Machine (FHEVM)** enables computation on encrypted data without decryption. Imagine an auction where bids are encrypted end-to-end - the contract determines a winner without ever seeing the bid amounts. That's FHEVM.

2. **Browser Support** - Requires WebAssembly support (all modern browsers)

3. **Client-side Reveal** - Winner reveal not on-chain (ready for upgrade)│       │   └── relayer.ts            # Relayer SDK wrapper

4. **Single Session** - One product per session (refresh to change)

5. **Gas Costs** - Each encryption & transaction costs testnet gas│       └── react/                    # React hooksThis SDK demonstrates production-grade FHEVM integration across all JavaScript environments.



---│           ├── useEncryptBid.ts      # getEncryptBid() + hook



## 🎓 Learning Resources│           ├── useDecryptWinner.ts   # Winner decryption## ✨ Core Features



- **[Zama FHEVM Docs](https://docs.zama.ai/fhevm/)** - Full FHE documentation│           └── useSubmitEncryptedBid.ts

- **[Relayer SDK Docs](https://docs.zama.ai/protocol/relayer-sdk-guides)** - SDK integration guide

- **[FHEVM v0.9 Roadmap](https://docs.zama.ai/change-log/release/fhevm-v0.9-october-2025)** - Upcoming features│- **🔐 Framework-Agnostic Core**: Zero dependencies in core SDK



---└── docs/- **🚀 Real FHEVM**: Relayer SDK v0.2.0 from Zama (official)



## 📝 Recent Updates    ├── DEVELOPMENT_SUMMARY.md        # Technical deep-dive (all issues & solutions)- **⚛️ Multi-Framework**: React, Vue, Node.js, Vanilla JS (same code works everywhere)



### Session October 21-22, 2025    ├── INTEGRATION_GUIDE.md          # How to use as reference for own projects- **📦 Monorepo**: Organized `/packages` for SDK and `/examples` for demos



**Fixed Issues:**    └── README_LATEST.md              # Full feature documentation- **🧪 Multi-Bid Auction**: 1 manual bid + 9 simulated bids (10 total)

- ✅ Vercel deployment build failures

- ✅ React hook context errors```- **🌐 Sepolia Testnet**: Works on Zama's FHEVM testnet

- ✅ Workflow integrity (MetaMask signatures required)

- ✅ Winner reveal crashes- **� Full Documentation**: 2,900+ lines of guides and API refs

- ✅ Removed all debug console.log statements

- ✅ Cleanup unnecessary files---



**Improvements:**## 📋 Prerequisites

- ✅ Production-ready codebase

- ✅ Comprehensive documentation## 📖 Documentation

- ✅ Clear architecture & scope documentation

- **Node.js** v18 or higher

See [DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md) for full details.

| Document | Purpose | Time |- **pnpm** package manager (`npm install -g pnpm`)

---

|----------|---------|------|- **Git** for cloning

## 📄 License

| **[DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md)** | Technical guide, all issues & solutions, architecture patterns | 15 min |- **MetaMask** (only for testnet interaction, optional)

MIT License - See [LICENSE](LICENSE) file for details

| **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** | How to use WinnerPrice as reference for building your own FHE app | 10 min |

---

| **[README_LATEST.md](./README_LATEST.md)** | Full feature documentation, deployment, security details | 10 min |## 🚀 Project Structure

## 🤝 Contributing



Contributions welcome! Areas for improvement:

- Mainnet deployment---```

- On-chain winner reveal (FHEVM v0.9+)

- More sophisticated auction typesfhevm-react-template/

- Enhanced UI/UX

- Additional test coverage## 🚀 Building Your Own├── packages/



---│   └── fhevm-sdk/              # 🔐 Framework-agnostic SDK (core dependency)



## 🙋 SupportThis repo is a **working reference example**. To build your own FHE auction app:│       ├── core/               # ← Zero dependencies here!



- **Live App:** [https://winnerprice.vercel.app](https://winnerprice.vercel.app)│       │   ├── encrypt.ts      # FHEVM encryption

- **Issues:** [GitHub Issues](https://github.com/dharmanan/winnerprice/issues)

- **Documentation:** See files above1. **Read** [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) - Step-by-step patterns│       │   ├── contract.ts     # Contract interaction



---2. **Reference** the source code in `examples/nextjs-app/`│       │   ├── relayer.ts      # Relayer service



**Made with ❤️ using Zama FHEVM technology**3. **Adapt** components for your use case│       │   ├── decrypt.ts      # Decryption utils



**Status:** ✅ Concept Implementation, Ready for Testing  4. **Deploy** to Vercel (auto-deploy on push)│       │   └── readWinner.ts   # Data reading

**Live:** https://winnerprice.vercel.app  

**Network:** Ethereum Sepolia Testnet  │       ├── react/              # React hooks (optional)

**Last Updated:** October 22, 2025

Key patterns to learn:│       │   ├── useEncryptBid.ts

- ✅ Use `getEncryptBid()` non-hook function in components outside context│       │   ├── useDecryptWinner.ts

- ✅ Use React hooks (`useEncryptBid`, `useSubmitEncryptedBid`) in providers│       │   └── ... (3 more hooks)

- ✅ MetaMask signature required for state changes│       └── [API_REFERENCE.md](./packages/fhevm-sdk/API_REFERENCE.md) & [ARCHITECTURE.md](./packages/fhevm-sdk/ARCHITECTURE.md)

- ✅ Real FHEVM encryption via Zama Relayer SDK│

├── examples/

---│   ├── nextjs-app/             # React + Next.js full-featured demo

│   ├── vue-example/            # Vue 3 Composition API demo

## 🔐 Security│   ├── node-example/           # Node.js CLI & batch encryption

│   └── vanilla-js-example/     # Single HTML file, zero deps

- **Client-side encryption:** WASM-based real FHE, not mock│

- **Zero-knowledge:** Server never sees plaintext bids└── contracts/

- **Zama Relayer:** Handles encryption key management    └── MockAuction.sol         # Smart contract for auction

- **MetaMask signing:** Required for all state changes```

- **Testnet only:** Current deployment on Sepolia (demo/testing)

## 💡 How It Works

---

### 1. Core SDK (Zero Dependencies)

## 🧪 Usage```typescript

// Works ANYWHERE - browser, Node.js, Deno, even edge functions!

### Connect Walletimport { encryptBid } from 'fhevm-sdk/core';

```

Click "Connect Wallet" → Approve MetaMask popupconst encrypted = await encryptBid(bidAmount, contractAddress);

```// Returns: { handles: Uint8Array[], inputProof: Uint8Array }

```

### Select Product & Join

```### 2. Framework-Specific Hooks (Optional)

Select a product → Click "Join Auction" → Confirm MetaMask signature```typescript

```// React? Use the hook:

import { useEncryptBid } from 'fhevm-sdk/react';

### Place Encrypted Bidconst { encryptBid, isLoading } = useEncryptBid();

```

Enter bid amount ($1,000-$50,000) → Click "Submit My Encrypted Bid"// Vue? Same SDK, different wrapper

Bid encrypted with FHEVM → MetaMask signature required// Node.js? Same SDK, no wrapper needed

```// Vanilla JS? Same SDK, native await

```

### Simulate Auction (Optional)

```### 3. Real FHEVM Encryption

Click "Simulate Auction" to add 9 more encrypted bids- Uses official **Relayer SDK v0.2.0** from Zama

All bids encrypted with real FHEVM- Encrypted on client-side (frontend)

```- Submitted via contract (backend)

- Never exposed in plaintext

### Reveal Winner

```## 📖 Using the SDK

Click "Reveal Winner" → Winner calculated from closest bid

No bids ever decrypted - winner determined locally### For React/Vue Developers

```1. Open [GETTING_STARTED.md](./GETTING_STARTED.md)

2. Pick your framework

---3. Copy the integration code from your example app

4. Done! ✅

## 📊 Performance

### For Backend/Node.js Developers

```1. See [node-example/README.md](./examples/node-example/README.md)

Build:       291 modules, 3.25 seconds2. Import `encryptBid` from core

Bundle Size: 216 KB (gzipped: 67 KB) main3. Integrate into your pipeline

             292 KB (gzipped: 96 KB) vendor4. No framework overhead! ✅

Encryption:  ~2-3 seconds per bid (WASM FHE)

Deploy:      2-3 minutes to Vercel### For Advanced Users

```1. Read [ARCHITECTURE.md](./packages/fhevm-sdk/ARCHITECTURE.md)

2. Review [API_REFERENCE.md](./packages/fhevm-sdk/API_REFERENCE.md)

---3. Check [SIMULATE_REAL_FHEVM.md](./SIMULATE_REAL_FHEVM.md) for examples

4. Implement your own wrapper! ✅

## 🌐 Deployment

## 🧪 Testing the Examples

### Vercel (Current - Live)

```bashEach example includes a **multi-bid auction** (1 manual + 9 simulated) that demonstrates real encryption:

# Auto-deploy on push to main

# Manual redeploy: Vercel Dashboard → Redeploy button```bash

# Environment variables configured in Vercel project settings# React - interactive UI with live simulation

```cd examples/nextjs-app && pnpm install && pnpm dev



### Environment Variables (Production)# Vue - same auction, different framework  

```envcd examples/vue-example && pnpm install && pnpm dev

VITE_RELAYER_ENDPOINT=https://relayer.testnet.zama.cloud

VITE_AUCTION_CONTRACT=0xb6E160B1ff80D67Bfe90A85eE06Ce0A2613607D1# Node.js - encrypt multiple bids programmatically

```cd examples/node-example && pnpm install && node src/index.ts



---# Vanilla JS - open in browser immediately

cd examples/vanilla-js-example && open index.html

## 📝 Recent Updates```



### Session October 21, 2025All examples produce encrypted bids ready for contract submission. ✅



**Fixed Issues:**## 🔧 Common Tasks

- ✅ Vercel deployment build failures

- ✅ React hook context errors### Install Dependencies

- ✅ Workflow integrity (MetaMask signatures required)```bash

- ✅ Winner reveal crashescd fhevm-react-template

pnpm install  # Installs all monorepo packages

**Improvements:**```

- ✅ Removed debug console.log statements

- ✅ Added comprehensive documentation### Run Specific Example

- ✅ Optimized module bundling```bash

- ✅ Production-ready codebasecd examples/nextjs-app

pnpm dev --port 3000

See [DEVELOPMENT_SUMMARY.md](./DEVELOPMENT_SUMMARY.md) for full details.```



---### Build for Production

```bash

## ⚠️ Known Limitationscd examples/nextjs-app

pnpm build

1. **Testnet Only** - Currently on Sepolia testnet (demo purposes)pnpm start

2. **Browser Support** - Requires WebAssembly support (all modern browsers)```

3. **Gas Costs** - Each encryption & transaction costs testnet gas

4. **Single Session** - One product per session (refresh to change)### TypeScript Compilation Check

5. **Manual Reveal** - Winner reveal not automated (requires button click)```bash

pnpm tsc --noEmit  # Verify no errors

---```



## 🤝 Contributing## 📚 Documentation



Contributions welcome! Areas for improvement:| Document | Purpose | Read Time |

- Mainnet deployment|----------|---------|-----------|

- Automated winner reveal| [GETTING_STARTED.md](./GETTING_STARTED.md) | Setup guides per framework | 5 min |

- More sophisticated auction types| [ARCHITECTURE.md](./packages/fhevm-sdk/ARCHITECTURE.md) | Design patterns & decisions | 10 min |

- Enhanced UI/UX| [API_REFERENCE.md](./packages/fhevm-sdk/API_REFERENCE.md) | Complete API docs | 15 min |

- Additional test coverage| [ZAMA_BOUNTY_SUBMISSION.md](./ZAMA_BOUNTY_SUBMISSION.md) | Bounty requirements & proof | 10 min |

| [SIMULATE_REAL_FHEVM.md](./SIMULATE_REAL_FHEVM.md) | Real encryption examples | 8 min |

---| [TEST_STEPS.md](./TEST_STEPS.md) | Debugging & troubleshooting | 5 min |



## 📄 License## 🎥 Video Walkthrough



MIT License - See [LICENSE](LICENSE) file for details**[FHEVM SDK Implementation Walkthrough](https://www.youtube.com/watch?v=jVdb4_ishNA)** - Complete technical deep-dive covering SDK architecture, framework-agnostic design, real FHEVM integration, and deployment strategy.



---## 🤝 Contributing



## 🙋 SupportHave a framework you'd like to support? Found a bug? Want to optimize the encryption?



- **Live App:** [https://winnerprice.vercel.app](https://winnerprice.vercel.app)1. Fork the repository

- **Issues:** [GitHub Issues](https://github.com/dharmanan/winnerprice/issues)2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

- **Documentation:** See files above3. Commit changes (`git commit -m 'Add AmazingFeature'`)

- **Reference Example:** This entire repo!4. Push to branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

---

All contributions welcome! 🙌

**Made with ❤️ using Zama FHEVM technology**

## 📞 Support & Resources

**Status:** ✅ Production Ready  

**Live:** https://winnerprice.vercel.app  - **🐛 Issues**: [GitHub Issues](https://github.com/dharmanan/fhevm-react-template/issues)

**Last Updated:** October 21, 2025- **💬 Questions**: [FHEVM Discord](https://discord.com/invite/zama)

- **📖 Docs**: [Zama FHEVM Documentation](https://docs.zama.ai/protocol/solidity-guides/)
- **🎯 Relayer SDK**: [Relayer SDK Guide](https://docs.zama.ai/protocol/relayer-sdk-guides/)

## 👤 Author

**Koray** - Created as part of Zama Bounty Program

- GitHub: [@dharmanan](https://github.com/dharmanan)
- Repository: [fhevm-react-template](https://github.com/dharmanan/fhevm-react-template)

## 📄 License

This project is licensed under the **BSD-3-Clause-Clear License**. See the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the FHEVM community**

*Last updated: October 2025*
