import { JsonRpcProvider } from '@ethersproject/providers';
import { useLakeCirculationSupply } from './use-lake-circulation-supply';
import { useLakePrice } from './use-lake-price';

export const useLakeStats = async (provider: JsonRpcProvider) => {
    const lakePrice = await useLakePrice(provider);
    const circulationSupply = await useLakeCirculationSupply(provider);
    return {
        marketCup: circulationSupply * lakePrice,
        circulationSupply,
        lakePrice,
        consentsGathered: 0,
    };
};
