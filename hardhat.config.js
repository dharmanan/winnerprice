import "@nomicfoundation/hardhat-toolbox/index.js";
import "hardhat-deploy";

// Load env variables from .env.local
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";
const INFURA_URL = process.env.INFURA_URL || "https://sepolia.infura.io/v3/YOUR_INFURA_KEY";

const config = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: INFURA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
