import Fortmatic from 'fortmatic';
import Web3 from "web3";

const customNodeOptions = {
    rpcUrl: 'http://127.0.0.1:7545',//, // your own node url
    chainId: 5777 // chainId of your own node
}

/** Setting network to localhost blockchain **/
export const fm = new Fortmatic('pk_test_F64FF8191AA41844', customNodeOptions);
let web3Fortmatic = new Web3(fm.getProvider());
window.web3 = web3Fortmatic;
export const web3Provider = web3Fortmatic;

/** production
export const fm = new Fortmatic("pk_test_F64FF8191AA41844");
export const web3Provider = new Web3(fm.getProvider());
**/
