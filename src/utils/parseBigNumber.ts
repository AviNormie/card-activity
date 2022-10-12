import { ethers } from 'ethers';

export const parseBigNumber = (
    bigNumber: ethers.BigNumber,
    decimals = 18,
): number => parseFloat(ethers.utils.formatUnits(bigNumber, decimals));
