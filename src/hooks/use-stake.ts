import { JsonRpcProvider } from '@ethersproject/providers';
import { AbiCoder } from 'ethers/lib/utils';
import { useConfig } from './use-config';
import { Contract } from 'ethers';
import { nonfungiblePositionManagerAbi } from '../abis/nonfungiblePositionManager';
import { END_TIME, START_TIME } from '../constants/mainnet';

export const useStake = async (
    provider: JsonRpcProvider,
    account: string,
    tokenId: number,
    poolAddress: string,
): Promise<void> => {
    const {
        nonfungiblePositionManagerAddress,
        uniswapV3StakerAddress,
        lakeAddress,
    } = useConfig();
    const nftPositionManager = new Contract(
        nonfungiblePositionManagerAddress,
        nonfungiblePositionManagerAbi,
        provider.getSigner(),
    );
    const txn = await nftPositionManager.safeTransferFrom(
        account,
        uniswapV3StakerAddress,
        tokenId,
        new AbiCoder().encode(
            ['address', 'address', 'uint256', 'uint256', 'address'],
            [lakeAddress, poolAddress, START_TIME, END_TIME, account],
        ),
    );
    await txn.wait();
};
