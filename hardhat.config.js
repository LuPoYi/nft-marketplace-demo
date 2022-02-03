require('@nomiclabs/hardhat-waffle')
const fs = require('fs')
const privateKey = fs.readFileSync('.secret').toString()
// TODO: hide in source code
const projectId = '6ed99282e4f848fca21f3933131e1d3a'

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
}
