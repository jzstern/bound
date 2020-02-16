import Fortmatic from 'fortmatic';
import Web3 from "web3";

// export const fm = new Fortmatic("pk_test_F64FF8191AA41844");
export const fm = new Fortmatic("pk_test_F64FF8191AA41844");
export const web3Provider = new Web3(fm.getProvider());
// export const Box = require('3box');