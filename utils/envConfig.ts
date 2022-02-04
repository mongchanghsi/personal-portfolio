const envConfig = {
  MAINNET: process.env.NEXT_PUBLIC_MAINNET === 'true' ? true : false,
  RPC_URL_MAINNET: process.env.NEXT_PUBLIC_RPC_URL_MAINNET || '',
  RPC_URL_RINKEBY: process.env.NEXT_PUBLIC_RPC_URL_RINKEBY || '',
  CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
  PRESALE_SALE_TIME:
    Number(process.env.NEXT_PUBLIC_PRESALE_SALE_TIME) || Infinity,
  PRESALE_WINDOW: Number(process.env.NEXT_PUBLIC_PRESALE_WINDOW) || 8640000,
  PUBLIC_SALE_TIME:
    Number(process.env.NEXT_PUBLIC_PUBLIC_SALE_TIME) || Infinity,
  MINT_OVER: process.env.NEXT_PUBLIC_MINT_OVER === 'true' ? true : false,
  CONTRACT_DEPLOYED:
    process.env.NEXT_PUBLIC_CONTRACT_DEPLOYED === 'true' ? true : false,
};

export default envConfig;
