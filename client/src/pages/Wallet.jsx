import { AptosClient } from 'aptos';

const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1'); // Use devnet or mainnet URL as appropriate

const executeTransaction = async (sender, payload, privateKey) => {
  try {
    const transaction = await client.generateTransaction(sender, payload);
    const signedTx = await client.signTransaction(transaction, privateKey);
    const result = await client.submitTransaction(signedTx);
    await client.waitForTransaction(result.hash);
    return result;
  } catch (error) {
    console.error("Transaction failed", error);
  }
};

// Payload for smart contract call
const payload = {
  function: '0x123456789abcdef::YourContractName::your_function_name',
  arguments: ['arg1', 'arg2'],
  type_arguments: [],
};
