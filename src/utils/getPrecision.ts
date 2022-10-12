import { DEFAULT_ROUNDING } from '../constants/blockchain';

export const getPrecision = (
    value: number,
    symbol = '',
    precision = -1,
): number =>
    symbol === '%'
        ? 2
        : Math.abs(value) > 1000
        ? 0
        : precision >= 0
        ? precision
        : symbol === ''
        ? 2
        : DEFAULT_ROUNDING;
