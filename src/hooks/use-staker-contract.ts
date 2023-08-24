import { Contract } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { uniswapV3StakerAbi } from '../abis/uniswapV3Staker';
import { useConfig } from './use-config';

export const useStakerContract = (provider: JsonRpcProvider) => {
    const { uniswapV3StakerAddress } = useConfig();
    return new Contract(uniswapV3StakerAddress, uniswapV3StakerAbi, provider);
};
