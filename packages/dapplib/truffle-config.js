require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note soap solid hidden nation fresh such'; 
let testAccounts = [
"0x2e544111e608d980c67659fc9f5cb709c658f740e53521ef79c664a6a62ffd1d",
"0x39d0ad36484b7ee650d75ba3f5f9af433739bbe9e7a3ecf8006ebdd51839a2c1",
"0x3f9adc82d0a0761df87705edd9966e264bc60f2ca63798c950d45af0dcb39d5c",
"0x95c5e1d6c40a25a41b3c21fece2b5e293ea018bc412aeb00b738f2c202cc9ea0",
"0x45f70739754f504ff303975d7be1d78ba8c9336f3e8e8904eb9e0f07fe2bbb08",
"0x996d2bbbe985a2635f52747b0c85821f3958f7a655274e591c8e099adb458fab",
"0x0e55260cd47bc093ea8bf8b98240a2c295a833c04345de74dbfa525db6e4d99b",
"0x78e1ffe722e3dce556221687bb0f89b01bd4fd967eb9d0b3e138c274c9609d94",
"0x59e773c953e120fa48db374ba2275d9a26505a06ad217eea883165605ed7eb39",
"0x3ce32abd1160b37b46798881f535f95dc7a850aa83de13a239df47b68dbcc34c"
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
            version: '^0.5.11'
        }
    }
};
