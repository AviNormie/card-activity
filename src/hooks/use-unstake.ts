import { JsonRpcProvider } from '@ethersproject/providers';
import { useConfig } from './use-config';
import { Contract, utils } from 'ethers';
import { END_TIME, START_TIME } from '../constants/mainnet';
import { uniswapV3StakerAbi } from '../abis/uniswapV3Staker';

export const useUnstake = async (
    provider: JsonRpcProvider,
    account: string,
    tokenId: number,
    poolAddress: string,
): Promise<void> => {
    const { uniswapV3StakerAddress, lakeAddress } = useConfig();
    const stakerContract = new Contract(
        uniswapV3StakerAddress,
        uniswapV3StakerAbi,
        provider.getSigner(),
    );
    const IStakerContract = new utils.Interface(uniswapV3StakerAbi);
    const unstakeData = IStakerContract.encodeFunctionData('unstakeToken', [
        [lakeAddress, poolAddress, START_TIME, END_TIME, account],
        tokenId,
    ]);
    const withdrawData = IStakerContract.encodeFunctionData('withdrawToken', [
        tokenId,
        account,
        '0x',
    ]);

    const txn = await stakerContract.multicall([unstakeData, withdrawData]);
    await txn.wait();
};
