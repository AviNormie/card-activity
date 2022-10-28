import { SEC_PER_DAY } from '../constants/commons';

export const getDurationProgress = (
    cliff: number,
    duration: number,
    tgeTimestamp: number,
): number => {
    return (
        ((new Date().getTime() / 1000 - tgeTimestamp) * 100) /
        (cliff + duration)
    );
};

export const getDurationLeft = (
    cliff: number,
    duration: number,
    tgeTimestamp: number,
): number => {
    return (
        Math.floor(
            (tgeTimestamp + cliff + duration - new Date().getTime() / 1000) /
                SEC_PER_DAY,
        ) + 1
    );
};

export const isVestingScheduleUnlocked = (
    cliff: number,
    duration: number,
    tgeTimestamp: number,
) => {
    return tgeTimestamp + cliff + duration < new Date().getTime() / 1000;
};
