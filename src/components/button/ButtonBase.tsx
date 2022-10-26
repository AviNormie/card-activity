import { GradientBorder } from '../GradientBorder';
import { ReactNode } from 'react';
import { Size } from './Button';
import { colors } from '../../constants/colors';
import styled from 'styled-components';

interface Props {
    size: Size;
    disabled: boolean;
    children: ReactNode;
    onClick?: () => void;
}

export const ButtonBase = ({ size, disabled, children, onClick }: Props) => (
    <button disabled={disabled} onClick={onClick}>
        <GradientBorder
            className={`${
                size === 'small'
                    ? 'min-w-[11rem] h-[3rem]'
                    : size === 'medium'
                    ? 'min-w-[13rem] h-[3rem]'
                    : 'min-w-[16rem] h-[4rem]'
            } p-px flex justify-center items-center rounded-[32px]`}
        >
            <div
                className={`w-full h-full flex justify-center items-center rounded-[32px] bg-black-500 ${
                    size === 'small'
                        ? 'px-2'
                        : size === 'medium'
                        ? 'px-4'
                        : 'px-6'
                }`}
            >
                {children}
            </div>
        </GradientBorder>
    </button>
);
