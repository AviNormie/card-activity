import { Contract } from 'ethers';
import { JsonRpcSigner } from '@ethersproject/providers';
import { VESTING_SCHEDULE_ADDRESS } from '../constants/blockchain';
import { vestingScheduleAbi } from '../abis/vestingSchedule';

export const useTokenClaim = () => {
    const claimAllTokens = async (signer: JsonRpcSigner): Promise<void> => {
        const vestingScheduleContract = new Contract(
            VESTING_SCHEDULE_ADDRESS,
            vestingScheduleAbi,
            signer,
        );
        const tx = await vestingScheduleContract.claimAllTokens();
        return await tx.wait();
    };

    return {
        claimAllTokens,
    };
};
