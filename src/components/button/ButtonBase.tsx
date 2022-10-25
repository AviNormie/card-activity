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
                    ? 'min-w-[12rem] h-[3rem]'
                    : size === 'medium'
                    ? 'min-w-[14rem] h-[3rem]'
                    : 'min-w-[17rem] h-[4rem]'
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

const GradientBorder = styled.div`
    background: linear-gradient(${colors.purple['300']}, ${colors.blue['300']});
    box-shadow: inset 2px 2px 14px rgba(255, 255, 255, 0.46);
    filter: drop-shadow(0px 0px 6px ${colors.purple['600']})
        drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
