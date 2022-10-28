import {
    getDurationLeft,
    getDurationProgress,
    isVestingScheduleUnlocked,
} from './getDuration';

import { ASSET_LAKE } from '../constants/assets';
import { IBeneficiaryOverview } from '../interfaces/beneficiaryOverview.interface';
import { IVestingSchedule } from '../interfaces/vestingSchedule.interface';
import { getTermsAsString } from './getTermsAsString';
import { getUnlockedAmount } from './getUnlockedAmount';
import { parseBigNumber } from './parseBigNumber';

export const formatVestingScheduleData = (
    beneficiaryOverview: IBeneficiaryOverview,
    tgeTimestamp: number,
): IVestingSchedule => {
    const { name } = beneficiaryOverview;
    const terms = parseBigNumber(
        beneficiaryOverview.terms,
        ASSET_LAKE.decimals,
    );
    const cliff = parseBigNumber(
        beneficiaryOverview.cliff,
        ASSET_LAKE.decimals,
    );
    const duration = parseBigNumber(
        beneficiaryOverview.duration,
        ASSET_LAKE.decimals,
    );
    const allocatedAmount = parseBigNumber(
        beneficiaryOverview.allocatedAmount,
        ASSET_LAKE.decimals,
    );
    const vestingRate = (allocatedAmount * terms) / duration;
    const isUnlocked = isVestingScheduleUnlocked(cliff, duration, tgeTimestamp);
    return {
        name,
        terms,
        cliff,
        duration,
        durationLeft: isUnlocked
            ? 0
            : getDurationLeft(cliff, duration, tgeTimestamp),
        durationProgress: isUnlocked
            ? 100
            : getDurationProgress(cliff, duration, tgeTimestamp),
        vestingRate,
        vestingRateAsString: isUnlocked
            ? 'FULLY VESTED'
            : `${vestingRate} $LAKE / ${getTermsAsString(terms)}`,
        unlockedAmount: isUnlocked
            ? allocatedAmount
            : getUnlockedAmount(cliff, terms, vestingRate, tgeTimestamp),
        isUnlocked,
        allocatedAmount,
        withdrawnAmount: parseBigNumber(
            beneficiaryOverview.withdrawnAmount,
            ASSET_LAKE.decimals,
        ),
    };
};
