require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.INFURA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
