https://www.youtube.com/watch?v=GKJBEEXUha0

```zsh
npx create-next-app nft-marketplace-demo

yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client@50.1.2 axios

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
// do some config tailwind

npx hardhat

npx hardhat test
```

```
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

```
