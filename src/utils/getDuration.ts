import { SEC_PER_DAY } from '../constants/commons';

export const getDurationProgress = (
    cliff: number,
    duration: number,
    terms: number,
    tgeTimestamp: number,
): number => {
    const durationProgress =
        ((new Date().getTime() / 1000 - tgeTimestamp) * 100) /
        (cliff + duration * terms);
    return durationProgress > 0 ? durationProgress : 0;
};

export const getDurationLeft = (
    cliff: number,
    duration: number,
    terms: number,
    tgeTimestamp: number,
): number => {
    return (
        Math.floor(
            (tgeTimestamp +
                cliff +
                duration * terms -
                new Date().getTime() / 1000) /
                SEC_PER_DAY,
        ) + 1
    );
};

export const isVestingScheduleUnlocked = (
    cliff: number,
    duration: number,
    terms: number,
    tgeTimestamp: number,
) => {
    return (
        tgeTimestamp + cliff + duration * terms < new Date().getTime() / 1000
    );
};
