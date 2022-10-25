import { ButtonBase } from './ButtonBase';

export type Size = 'small' | 'medium' | 'big';
interface Props {
    size: Size;
    disabled: boolean;
    text: string;
    onClick?: () => void;
}

export const Button = ({ size, disabled, text, onClick }: Props) => (
    <ButtonBase size={size} disabled={disabled} onClick={onClick}>
        <span
            className={`color-gradient-light tracking-wider ${
                size === 'small'
                    ? 'text-xs'
                    : size === 'medium'
                    ? 'text-base'
                    : 'text-xl'
            }`}
        >
            {text}
        </span>
    </ButtonBase>
);
