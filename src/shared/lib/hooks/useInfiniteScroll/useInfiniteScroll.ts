import { MutableRefObject, useEffect, useRef } from 'react';

export interface useInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: useInfiniteScrollProps) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerRef.current);
        }
        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current?.unobserve(triggerRef.current);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
