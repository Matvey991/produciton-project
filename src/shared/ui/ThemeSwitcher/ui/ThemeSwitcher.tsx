import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/Providers/ThemeProvider';
import { Button, ThemeButton } from '../../Button/Button';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '../../../assets/icons/theme-dark.svg';
import LightIcon from '../../../assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
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
