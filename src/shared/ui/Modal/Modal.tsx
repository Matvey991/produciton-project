import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onCLose?: () => void
    lazy: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className, lazy, children, isOpen, onCLose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMouted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onCLose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onCLose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onCLose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMouted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
