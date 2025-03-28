


// Define the Config type (fields must match exactly these types)
type Config = {
  rpcUrl: string;
  chainId: number;
  address: string;
};

// Example configuration for Arbitrum (replace with Base values if needed)
const testnetConfig: Config = {
  // Arbitrum Goerli testnet
  rpcUrl: 'https://goerli-rollup.arbitrum.io/rpc',  // Arbitrum testnet public RPC URL&#8203;:contentReference[oaicite:3]{index=3}
  chainId: 421613,                                  // Arbitrum Goerli chainId&#8203;:contentReference[oaicite:4]{index=4} 
  address: '0x<Deperp_USDT-BTC_Testnet_Address>'    // Deperp contract address on Arbitrum testnet (USDT-BTC market)
};

const mainnetConfig: Config = {
  // Arbitrum One mainnet
  rpcUrl: 'https://arb1.arbitrum.io/rpc',           // Arbitrum One mainnet RPC URL&#8203;:contentReference[oaicite:5]{index=5}
  chainId: 42161,                                   // Arbitrum One chainId&#8203;:contentReference[oaicite:6]{index=6}
  address: '0x<Deperp_USDT-BTC_Mainnet_Address>'    // Deperp contract address on Arbitrum mainnet (USDT-BTC market)
};

// Export a function to get the correct config based on environment
export const getConfig = (): Config => {
  return process.env.TYPE_NETWORK === 'mainnet' ? mainnetConfig : testnetConfig;
};

};
