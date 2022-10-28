import { Contract } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { parseBigNumber } from '../utils/parseBigNumber';
import { useConfig } from './use-config';
import { vestingScheduleAbi } from '../abis/vestingSchedule';

export const useTgeTimestamp = () => {
    const { vestingScheduleAddress } = useConfig();
    const getTgeTimestamp = async (
        provider: JsonRpcProvider,
    ): Promise<number> => {
        const vestingScheduleContract = new Contract(
            vestingScheduleAddress,
            vestingScheduleAbi,
            provider,
        );
        const tgeTimestampAsBigNumber =
            await vestingScheduleContract.callStatic.tgeTimestamp();
        return parseBigNumber(tgeTimestampAsBigNumber, 0);
    };

    return {
        getTgeTimestamp,
    };
};
