export const getUnlockedAmount = (
    cliff: number,
    terms: number,
    vestingRate: number,
    tgeTimestamp: number,
) => {
    return (
        Math.floor(
            (new Date().getTime() / 1000 - tgeTimestamp - cliff) / terms,
        ) * vestingRate
    );
};
