import { MAX_TICK, TICKS_RANGE } from '../../../../constants/commons';
import { useEffect, useState } from 'react';

import { GradientBorderWithNoShadow } from '../../../GradientBorder';
import minusGrayIcon from '../../../../assets/icons/minus-gray-icon.svg';
import minusIcon from '../../../../assets/icons/minus-icon.svg';
import plusGrayIcon from '../../../../assets/icons/plus-gray-icon.svg';
import plusIcon from '../../../../assets/icons/plus-icon.svg';
import { tickToPrice } from '@uniswap/v3-sdk';
import { useLakeToken } from '../../../../hooks/use-lake-token';
import { useUsdtToken } from '../../../../hooks/use-usdt-token';

type Props = {
    tickLower: number;
    tickUpper: number;
    nearestTick: number;
    tickSpacing: number;
    decreaseTickLower: () => void;
    increaseTickLower: () => void;
    decreaseTickUpper: () => void;
    increaseTickUpper: () => void;
    onFullRangeClick: () => void;
};

export const PriceRange = ({
    tickLower,
    tickUpper,
    nearestTick,
    tickSpacing,
    decreaseTickLower,
    increaseTickLower,
    decreaseTickUpper,
    increaseTickUpper,
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
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
                <div className="tracking-[.12em] flex items-center">
                    LOWER PRICE:
                </div>
                <div className="flex items-center mx-4">
                    <button
                        disabled={
                            tickLower <=
                            nearestTick - (TICKS_RANGE / 2) * tickSpacing
                        }
                        onClick={decreaseTickLower}
                    >
                        <img
                            className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                            src={
                                tickLower <=
                                nearestTick - (TICKS_RANGE / 2) * tickSpacing
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
                            tickLower >=
                            nearestTick + (TICKS_RANGE / 2 - 1) * tickSpacing
                        }
                        onClick={increaseTickLower}
                    >
                        <img
                            className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                            src={
                                tickLower >=
                                nearestTick +
                                    (TICKS_RANGE / 2 - 1) * tickSpacing
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
                            tickUpper <=
                            nearestTick - (TICKS_RANGE / 2 - 1) * tickSpacing
                        }
                        onClick={decreaseTickUpper}
                    >
                        <img
                            className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                            src={
                                tickUpper <=
                                nearestTick -
                                    (TICKS_RANGE / 2 - 1) * tickSpacing
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
                            tickUpper >=
                            nearestTick + (TICKS_RANGE / 2) * tickSpacing
                        }
                        onClick={increaseTickUpper}
                    >
                        <img
                            className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                            src={
                                tickUpper >=
                                nearestTick + (TICKS_RANGE / 2) * tickSpacing
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
    );
};
