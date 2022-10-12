import { getPrecision } from './getPrecision';

export const formatNumber = (
    value: number,
    symbol = '',
    precision = -1,
): number => {
    const multiplier = Math.pow(10, getPrecision(value, symbol, precision));

    return Math.floor(Math.abs(value * multiplier)) / multiplier;
};
