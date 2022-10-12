import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';

interface Props {
    disabled: boolean;
    children: ReactNode;
    onClick?: () => void;
}

export const GradientButtonBase = ({ disabled, children, onClick }: Props) => (
    <button disabled={disabled} onClick={onClick} className="cursor-pointer">
        <GradientBackground className="w-[17rem] h-[4rem] px-6 flex justify-center items-center rounded-[32px]">
            {children}
        </GradientBackground>
    </button>
);

const GradientBackground = styled.div`
    background: linear-gradient(
        90.21deg,
        ${colors.purple['900']},
        ${colors.blue['900']}
    );
    box-shadow: inset 2px 2px 14px rgba(255, 255, 255, 0.46);
    filter: drop-shadow(0px 0px 6px ${colors.purple['600']})
        drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: ${colors.white};
`;
