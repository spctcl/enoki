import { mnemonicToSeed, generateMnemonic } from 'bip39';
import * as dotenv from 'dotenv';
import { ethers, Wallet } from 'ethers'; 
import { HardhatUserConfig, task } from 'hardhat/config';
import 'hardhat-deploy';
import { hdkey } from 'ethereumjs-wallet';
import "@nomiclabs/hardhat-ethers";
import { privateToAddress } from 'ethereumjs-util';
import fs from 'fs';
import "@nomicfoundation/hardhat-toolbox";
import * as qrcode from 'qrcode-terminal';

dotenv.config({ path: __dirname+'/.env' });

const defaultNetwork = "mumbai";

export const getMnemonic = (path?: string): string => {
  try {
    return fs
      .readFileSync("./mnemonic.txt")
      .toString()
      .trim();
  } catch (e) {
    console.log('☢️ WARNING: No mnemonic file created for a deploy account. Try `yarn generate` and then `yarn account`.');
  }
  return '';
};

const getMumbaiConfig = (): string => {
  console.log("process.env.MUMBAI_PRIVATE_KEY: ",  process.env.MUMBAI_PRIVATE_KEY);
  if (process.env.MUMBAI_PRIVATE_KEY != undefined) {
    return process.env.MUMBAI_PRIVATE_KEY;
  }
  return "";
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: getMnemonic(),
      }
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [getMumbaiConfig()]
    }
  }
};

export default config;

// Hardhat Tasks

task('generate', 'Create a mnemonic for builder deploys', async (_, _hre) => {
  const mnemonic = generateMnemonic();
  console.log('mnemonic', mnemonic);
  const seed = await mnemonicToSeed(mnemonic);
  console.log('seed', seed);
  const hdwallet = hdkey.fromMasterSeed(seed);
  const walletHdPath = "m/44'/60'/0'/0/";
  const accountIndex = 0;
  const fullPath = walletHdPath + accountIndex.toString();
  console.log('fullPath', fullPath);
  const wallet = hdwallet.derivePath(fullPath).getWallet();
  const privateKey = `0x${wallet.getPrivateKey().toString('hex')}`;
  console.log('privateKey', privateKey);
  const address = `0x${privateToAddress(wallet.getPrivateKey()).toString('hex')}`;
  console.log(`🔐 Account Generated as ${address} and set as mnemonic in packages/solidity-ts`);
  console.log("💬 Use 'yarn account' to get more information about the deployment account.");

  fs.writeFileSync("./" + address + ".txt", mnemonic.toString());
  fs.writeFileSync("./mnemonic.txt", mnemonic.toString());
});

task('account', 'Get balance for the deployment account.', async (_, hre) => {
  const { address } = await getAccountData(getMnemonic());
  console.log("address: ", address);

  qrcode.generate(address);
  console.log(`‍📬 Deployer Account is ${address}`);
  for (const n in config.networks) {
    // console.log(config.networks[n],n)
    try {
      console.log("config.networks[n].url: ",config.networks[n].url)
      const provider = new ethers.providers.JsonRpcProvider(config.networks[n].url);
      const balance = await provider.getBalance(address);
      console.log(` -- ${n} --  -- -- 📡 `);
      console.log(`   balance: ${ethers.utils.formatEther(balance)}`);
      console.log(`   nonce: ${await provider.getTransactionCount(address)}`);
    } catch (e) {
      console.log(e);
    }
  }
});


// Helper Functions

export const getAccountData = async (mnemonic: string): Promise<{ address: string; wallet: Wallet }> => {
  console.log('mnemonic: ', mnemonic);
  const seed = await mnemonicToSeed(mnemonic);
  console.log('seed: ', seed);
  const hdwallet = hdkey.fromMasterSeed(seed);
  console.log('hdwallet: ', hdwallet);
  const walletHdPath = "m/44'/60'/0'/0/";
  const accountIndex = 0;
  const fullPath = walletHdPath + accountIndex.toString();
  console.log('fullPath', fullPath);
  const wallet = hdwallet.derivePath(fullPath).getWallet();
  const privateKey = `0x${wallet.getPrivateKey().toString('hex')}`;
  console.log('privateKey:', privateKey);
  const address = `0x${privateToAddress(wallet.getPrivateKey()).toString('hex')}`;
  console.log('address: ', address);
  return { address, wallet: Wallet.fromMnemonic(mnemonic, fullPath) };
};



