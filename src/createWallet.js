// Importando dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Rede testnet
const network = bitcoin.networks.testnet;

// Caminho de derivação BIP84 (P2WPKH - bech32 nativo)
const path = `m/84'/1'/0'/0/0`;

// Gerar a mnemônica
const mnemonic = bip39.generateMnemonic();

// Gerar a seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criar a raiz da carteira HD
const root = bip32.fromSeed(seed, network);

// Derivar a chave
const child = root.derivePath(path);

// Gerar endereço bech32 (P2WPKH nativo - BIP84)
const { address } = bitcoin.payments.p2wpkh({
  pubkey: child.publicKey,
  network: network,
});

// Exibir resultado
console.log('Carteira BIP84 (P2WPKH - bech32) na Testnet');
console.log('Endereço: ', address); // Ex: tb1q...
console.log('Chave privada (WIF): ', child.toWIF());
console.log('Seed (mnemonic): ', mnemonic);
