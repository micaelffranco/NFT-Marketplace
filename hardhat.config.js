require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  hardat: {
    chainId: 31337,
  },
  mumbai: {
    url: "https://polygon-mumbai.infura.io/v3/021b3b3ac83249029395b9e8171bb627",
    accounts: [privateKey]
  },
  mainnet: {
    url: "https://polygon-mainnet.infura.io/v3/021b3b3ac83249029395b9e8171bb627",
    accounts: [privateKey]
  },
  solidity: "0.8.9",
};
