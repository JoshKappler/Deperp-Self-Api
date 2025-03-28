import 'dotenv/config';


type Config = {
    rpcUrl: string;
    chainId: number;
    address: string;
}

const testnetConfig: Config = {
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    chainId: 42161
    address: '0xDBaabB95757Fe4a5C9ffF0107201a74C90024488' 
}

const mainnetConfig: Config = {
    rpcUrl: 'https://arb1.arbitrum.io/rpc', //Rate limited and not for production systems.
    chainId: 42161
    address: '0xDBaabB95757Fe4a5C9ffF0107201a74C90024488' // Taurus GA
}

export const getConfig = () => {
    if (process.env.TYPE_NETWORK === 'mainnet') {
        return mainnetConfig;
    }

    return testnetConfig;
}
