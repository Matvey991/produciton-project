import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
   className?: string;
   width?: string | number;
   height?: string | number;
   border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const { t } = useTranslation();

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
    );
});
