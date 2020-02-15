module.exports = {
  networks: {
    development: { // Ganache
      host: '127.0.0.1',
      port: 8545,
      gas: 6000000,
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
    },
  },
};