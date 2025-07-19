# 📘 Gerador de Carteira Bitcoin BIP84 (bech32 - Testnet)

Este projeto gera uma **carteira Bitcoin HD (Hierarchical Deterministic)** seguindo o padrão **BIP84**, que utiliza endereços **bech32 (P2WPKH - SegWit nativo)** na **rede de testes (Testnet)**.

## 🚀 O que o código faz

1. **Gera uma frase mnemônica aleatória (BIP39)**  
2. **Converte a mnemônica em uma seed (BIP39)**  
3. **Cria a carteira raiz HD (BIP32)**  
4. **Deriva o primeiro endereço BIP84: `m/84'/1'/0'/0/0`**  
5. **Gera um endereço bech32 (tb1...) na testnet**
6. **Exibe no console:**
   - Endereço público
   - Chave privada (WIF)
   - Frase mnemônica (seed)

> ⚠️ Cada execução gera uma carteira nova. Use **apenas para testes**.
