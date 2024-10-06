import React, { createContext, useState, useContext, useEffect } from 'react';
import { AptosWalletAdapter, WalletProvider as WalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { WelldoneWalletAdapter } from '@welldone-wallet/aptos-adapter';  // Assuming Welldone Wallet has an adapter

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  useEffect(() => {
    wallet.on('connect', () => {
      console.log('Wallet connected');
    });
  
    wallet.on('disconnect', () => {
      console.log('Wallet disconnected');
    });
  
    wallet.on('accountChanged', (newAccount) => {
      console.log('Account changed to', newAccount);
      setAccount(newAccount);
    });
  }, []);
  

  // Initialize wallet adapter for Welldone Wallet
  const wallet = new WelldoneWalletAdapter();

  const connectWallet = async () => {
    try {
      await wallet.connect();
      const address = wallet.account().address;
      setAccount(address);
    } catch (error) {
      console.error("Failed to connect to Welldone Wallet", error);
    }
  };

  useEffect(() => {
    if (wallet.isConnected()) {
      setAccount(wallet.account().address);
    }
  }, [wallet]);

  return (
    <WalletContext.Provider value={{ connectWallet, account }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
