require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note oval comfort install entire orange gauge'; 
let testAccounts = [
"0xc03acacd83c76f01ada50a4a9b574978860ee6c2877e145986a680f3ef26b219",
"0x0662ec5f96c1126ed725f60be501642f42f10fb754574befe51a6f493c1acd3b",
"0xb18834f85d1bb5ce7f426e9997dd565586cad83a48c13352d7b6c021b188206e",
"0xb87dd2696c88726c111c559a08bfbdc09ebff416ef12ac17248936893de967cf",
"0x2686f076eb0bb3577808320e0b3fe42fbc08c2550ce2719f4bd6938a33a69bb9",
"0xbb5cea88c2ce1c043aff4c29553ca0e019818e526e87020cb0f9a24cdf5e47cf",
"0x121a03877d277c5743758956f6910e0dcb54eb4f521f6d9d1a12ce5078049f6d",
"0xdc58943c6f4425c8bf47c4b89532ad67d801529145f35587df1093a1c285ac51",
"0x0ade77ebe51cf79ea9c1da13288f4f324f3f6c1efcde7644c65cc15213304aa7",
"0x4898c2462cbb2ae85e4ae21d7ed90966a30840c1159acc5c85977ee463d4d01c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

