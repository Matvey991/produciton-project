import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

type HeadetTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeadetTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        title,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const additional = [
        className,
        cls[theme],
        cls[align],
        cls[size],
    ];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
