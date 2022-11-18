import { JsonRpcProvider } from '@ethersproject/providers';
import { useUniswapPool } from './use-uniswap-pool';

export const useLakePrice = async (
    provider: JsonRpcProvider,
): Promise<number> => {
    const pool = await useUniswapPool(provider);
    return Number(pool.token1Price.toSignificant());
};
