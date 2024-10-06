import { useWallet } from '@aptos-labs/wallet-adapter-react';

const SendTransaction = () => {
  const { signAndSubmitTransaction } = useWallet();

  const handleTransaction = async () => {
    const transactionPayload = {
      type: 'entry_function_payload',
      function: '0x123456789abcdef::module_name::function_name',
      arguments: ['arg1', 'arg2'],
      type_arguments: [],
    };

    try {
      const response = await signAndSubmitTransaction(transactionPayload);
      console.log('Transaction successful', response);
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  return (
    <button onClick={handleTransaction}>Send Transaction</button>
  );
};
