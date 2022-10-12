import { ButtonBase } from './ButtonBase';

interface Props {
    disabled: boolean;
    text: string;
    onClick?: () => void;
}

export const Button = ({ disabled, text, onClick }: Props) => (
    <ButtonBase disabled={disabled} onClick={onClick}>
        <span className="color-gradient tracking-wider text-xl">{text}</span>
    </ButtonBase>
);
