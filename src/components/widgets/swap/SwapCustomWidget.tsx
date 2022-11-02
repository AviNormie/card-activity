import { SwapWidget } from '@uniswap/widgets';
import { useConfig } from '../../../hooks/use-config';
import { useEffect } from 'react';

export const SwapCustomWidget = () => {
    const { lakeAddress, swapConvenienceFee, swapConvenienceFeeRecipient } =
        useConfig();

    return (
        <div>
            <SwapWidget
                width="100%"
                defaultOutputTokenAddress={lakeAddress}
                hideConnectionUI={true}
                convenienceFee={swapConvenienceFee}
                convenienceFeeRecipient={swapConvenienceFeeRecipient}
            />
        </div>
    );
};
