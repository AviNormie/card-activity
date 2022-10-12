import { ReactNode } from 'react';
import { colors } from '../../../constants/colors';
import { GradientButtonBase } from './GradientButtonBase';

interface Props {
    disabled: boolean;
    text: string;
    children: ReactNode;
    onClick?: () => void;
}

export const GradientButtonWithIcon = ({
    disabled,
    text,
    children,
    onClick,
}: Props) => (
    <GradientButtonBase disabled={disabled} onClick={onClick}>
        <div className="w-full flex justify-between">
            {children}
            <span className="tracking-wider text-xl">{text}</span>
        </div>
    </GradientButtonBase>
);
