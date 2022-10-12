import { ReactNode } from 'react';
import { ButtonBase } from './ButtonBase';

interface Props {
    disabled: boolean;
    text: string;
    children: ReactNode;
    onClick?: () => void;
}

export const ButtonWithIcon = ({
    disabled,
    text,
    children,
    onClick,
}: Props) => (
    <ButtonBase disabled={disabled} onClick={onClick}>
        <div className="w-full flex justify-between">
            {children}
            <span className="color-gradient tracking-wider text-xl">
                {text}
            </span>
        </div>
    </ButtonBase>
);
