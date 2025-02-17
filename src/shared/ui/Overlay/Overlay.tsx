import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider';
import cls from './Overlay.module.scss';

interface OverlayProps {
   className?: string;
   onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;
    const { Spring, Gesture } = useAnimationLibs();

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
});
