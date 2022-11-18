import { useEffect, useState } from 'react';

import { GradientBorderWithNoShadow } from '../../../GradientBorder';
import { MAX_TICK } from '../../../../constants/commons';
import { colors } from '../../../../constants/colors';
import minusGrayIcon from '../../../../assets/icons/minus-gray-icon.svg';
import minusIcon from '../../../../assets/icons/minus-icon.svg';
import plusGrayIcon from '../../../../assets/icons/plus-gray-icon.svg';
import plusIcon from '../../../../assets/icons/plus-icon.svg';
import styled from 'styled-components';
import { tickToPrice } from '@uniswap/v3-sdk';
import { useLakeToken } from '../../../../hooks/use-lake-token';
import { useUsdtToken } from '../../../../hooks/use-usdt-token';

type Props = {
    isNewPosition: boolean;
    tickLower: number;
    tickUpper: number;
    nearestTick: number;
    tickSpacing: number;
    slippageTolerance: number;
    transactionDeadline: number;
    decreaseTickLower: () => void;
    increaseTickLower: () => void;
    decreaseTickUpper: () => void;
    increaseTickUpper: () => void;
    onSlippageToleranceChange: (event: any) => void;
    onTransactionDeadlineChange: (event: any) => void;
    onFullRangeClick: () => void;
};

export const Settings = ({
    isNewPosition,
    tickLower,
    nearestTick,
    tickSpacing,
    tickUpper,
    slippageTolerance,
    transactionDeadline,
    decreaseTickLower,
    increaseTickLower,
    decreaseTickUpper,
    increaseTickUpper,
    onSlippageToleranceChange,
    onTransactionDeadlineChange,
    onFullRangeClick,
}: Props) => {
    const [lowerPrice, setLowerPrice] = useState('0');
    const [upperPrice, setUpperPrice] = useState('∞');
    const quoteToken = useLakeToken();
    const baseToken = useUsdtToken();

    useEffect(() => {
        setLowerPrice(
            tickLower === -MAX_TICK
                ? '0'
                : tickToPrice(baseToken, quoteToken, tickLower).toSignificant(),
        );
    }, [tickLower]);

    useEffect(() => {
        setUpperPrice(
            tickUpper === MAX_TICK
                ? '∞'
                : tickToPrice(baseToken, quoteToken, tickUpper).toSignificant(),
        );
    }, [tickUpper]);

    return (
        <SettingsContainer className="w-full flex flex-col p-4 my-4 font-kanit-medium whitespace-nowrap text-xs">
            {isNewPosition && (
                <div className="flex flex-col w-full">
                    <div className="flex w-full justify-between">
                        <div className="tracking-[.12em] flex items-center">
                            LOWER PRICE:
                        </div>
                        <div className="flex items-center mx-4">
                            <button
                                disabled={
                                    tickLower <= nearestTick - 10 * tickSpacing
                                }
                                onClick={decreaseTickLower}
                            >
                                <img
                                    className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                                    src={
                                        tickLower <=
                                        nearestTick - 10 * tickSpacing
                                            ? minusGrayIcon
                                            : minusIcon
                                    }
                                    alt="minus"
                                />
                            </button>
                            <div className="color-gradient tracking-[.12em] text-2xl flex items-center mx-2">
                                {lowerPrice}
                            </div>
                            <button
                                disabled={
                                    tickLower >= nearestTick + 9 * tickSpacing
                                }
                                onClick={increaseTickLower}
                            >
                                <img
                                    className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                                    src={
                                        tickLower >=
                                        nearestTick + 9 * tickSpacing
                                            ? plusGrayIcon
                                            : plusIcon
                                    }
                                    alt="minus"
                                />
                            </button>
                        </div>
                        <div className="tracking-[.12em] ml-2 flex items-center">
                            LAKE / USDT
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="tracking-[.12em] flex items-center">
                            UPPER PRICE:
                        </div>
                        <div className="flex items-center mx-4">
                            <button
                                disabled={
                                    tickUpper <= nearestTick - 9 * tickSpacing
                                }
                                onClick={decreaseTickUpper}
                            >
                                <img
                                    className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                                    src={
                                        tickUpper <=
                                        nearestTick - 9 * tickSpacing
                                            ? minusGrayIcon
                                            : minusIcon
                                    }
                                    alt="minus"
                                />
                            </button>
                            <div className="color-gradient tracking-[.12em] text-2xl flex items-center mx-2">
                                {upperPrice}
                            </div>
                            <button
                                disabled={
                                    tickUpper >= nearestTick + 10 * tickSpacing
                                }
                                onClick={increaseTickUpper}
                            >
                                <img
                                    className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                                    src={
                                        tickUpper >=
                                        nearestTick + 10 * tickSpacing
                                            ? plusGrayIcon
                                            : plusIcon
                                    }
                                    alt="minus"
                                />
                            </button>
                        </div>
                        <div className="tracking-[.12em] ml-2 flex items-center">
                            LAKE / USDT
                        </div>
                    </div>
                    <div className="flex w-full justify-center my-2">
                        <button onClick={onFullRangeClick}>
                            <GradientBorderWithNoShadow className="w-[6rem] h-[1.5rem] p-px flex justify-center items-center rounded-[32px]">
                                <div className="w-full h-full flex justify-center items-center rounded-[32px] bg-black-500 px-2">
                                    FULL RANGE
                                </div>
                            </GradientBorderWithNoShadow>
                        </button>
                    </div>
                </div>
            )}
            <div className="flex w-full justify-between">
                <div className="tracking-[.12em] flex items-center">
                    SLIPPAGE TOLERANCE:
                </div>
                <div className="flex w-[5rem]">
                    <input
                        className="color-gradient text-base font-bold truncate text-end w-full"
                        value={slippageTolerance}
                        onChange={onSlippageToleranceChange}
                    />
                    <div className="tracking-[.12em] ml-2 flex items-center">
                        %
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div className="tracking-[.12em] flex items-center">
                    TRANSACTION DEADLINE:
                </div>
                <div className="flex w-[5rem]">
                    <input
                        className="color-gradient text-base font-bold truncate text-end w-full"
                        value={transactionDeadline}
                        onChange={onTransactionDeadlineChange}
                    />
                    <div className="tracking-[.12em] ml-2 flex items-center">
                        MIN
                    </div>
                </div>
            </div>
        </SettingsContainer>
    );
};

const SettingsContainer = styled.div`
    box-shadow: inset 1px 1px 1px rgba(68, 68, 68, 0.05),
        inset -1px -1px 4px rgba(134, 134, 134, 0.12);
    border-radius: 20px;
    background: ${colors.black[600]};
`;
