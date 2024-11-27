import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/Providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/Providers/ThemeProvider';
import { Button, ThemeButton } from '../../Button/Button';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '../../../assets/icons/theme-dark.svg';
import LightIcon from '../../../assets/icons/theme-light.svg';

interface ThemesSwitcherProps {
    className?: string
}

export const ThemesSwitcher = ({ className }: ThemesSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemesSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
