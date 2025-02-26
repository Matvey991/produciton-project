import { MutableRefObject, useEffect, useRef } from 'react';

export interface useInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: useInfiniteScrollProps) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }
        return () => {
            if (observer && triggerElement) {
                observer.current?.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
