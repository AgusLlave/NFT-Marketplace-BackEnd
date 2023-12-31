const { ethers } = require("hardhat");

const networkConfig = {
  default: {
    name: "hardhat",
    keepersUpdateInterval: "30",
  },

  31337: {
    name: "localhost",
  },

  11155111: {
    name: "sepolia",
    vrfCordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
