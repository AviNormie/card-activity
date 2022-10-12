import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface Props {
    disabled: boolean;
    children: ReactNode;
    onClick?: () => void;
}

export const ButtonBase = ({ disabled, children, onClick }: Props) => (
    <button disabled={disabled} onClick={onClick}>
        <GradientBorder className="min-w-[17rem] h-[4rem] p-px flex justify-center items-center rounded-[32px] filter shadow">
            <div className="w-full h-full flex justify-center items-center rounded-[32px] bg-black-500 px-8">
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
