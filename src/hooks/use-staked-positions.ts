import { JsonRpcProvider } from '@ethersproject/providers';
import { useUniswapV3PosContract } from './use-uniswap-v3-pos-contract';
import { useStakerContract } from './use-staker-contract';
import { usePositionDetailsById } from './use-position-details-by-id';
import { IPositionDetails } from '../interfaces/positionDetails.interface';

export const useStakedPositions = async (
    provider: JsonRpcProvider,
    account: string,
): Promise<IPositionDetails[]> => {
    const nftPositionManager = useUniswapV3PosContract(provider);
    const filter = nftPositionManager.filters.Transfer(account);
    const logsFrom = await nftPositionManager.queryFilter(filter, 0, 'latest');
    const stakingContract = useStakerContract(provider);

    const tokenIdsPotentialDuplicates = logsFrom.map((log: any) =>
        parseInt(log.args.tokenId),
    );
    const tokenIds = Array.from(new Set(tokenIdsPotentialDuplicates));

    const positions: IPositionDetails[] = [];
    for (let i = 0; i < tokenIds.length; i++) {
        const depositInfo = await stakingContract.callStatic.deposits(
            tokenIds[i],
        );
        if (
            depositInfo.owner.toLowerCase() === account.toLowerCase() &&
            depositInfo.numberOfStakes === 1 &&
            (depositInfo.tickLower !== '0' || depositInfo.tickUpper !== '0')
        ) {
            const posDetails = await usePositionDetailsById(
                provider,
                tokenIds[i],
            );
            if (posDetails) {
                positions.push(posDetails);
            }
        }
    }
    return positions;
};
