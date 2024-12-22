import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
