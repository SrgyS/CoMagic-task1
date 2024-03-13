import S from './AppButton.module.css';
import { useState } from 'react';

interface CustomButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    activeText?: string;
    defaultText?: string;
    size?: 'sm' | 'md' | 'lg';
}

const CustomButton = ({
    children,
    onClick,
    isActive = false,
    activeText,
    defaultText,
    size = 'md',
    ...props
}: CustomButtonProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        onClick();
    };

    return (
        <button
            {...props}
            onClick={handleClick}
            className={`${S.button} ${
                isClicked && isActive ? S.active : S.default
            } ${S[size]}`}
        >
            {isClicked && isActive ? activeText : defaultText} {children}
        </button>
    );
};

export default CustomButton;
