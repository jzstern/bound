module.exports = {
  networks: {
    development: { // Ganache
      host: 'localhost',
      port: 7545, //8545, // CLI
      //gas: 6000000,
      network_id: '*', // 5777
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, RINKEBY_ENDPOINT),
      network_id: 3,
      gas: 3000000,
      gasPrice: 21,
    },
  },
  compilers: {
    solc: {
      version: '^0.5.0',
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500
        }
      }
    },
  },
};