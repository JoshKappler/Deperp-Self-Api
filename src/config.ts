import 'dotenv/config';


type Config = {
    rpcUrl: string;
    chainId: number;
    address: string;
}

const testnetConfig: Config = {
    rpcUrl: 'https://eth.llamarpc.com',
    chainId: , 1,
    address: '0x4e68Ccd3E89f51C3074ca5072bbAC773960dFa36'
}

const mainnetConfig: Config = {
    rpcUrl: 'https://eth.llamarpc.com',
    chainId: 1,
    address: '0x4e68Ccd3E89f51C3074ca5072bbAC773960dFa36'
}

