import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
className?: string;
isOpen: boolean;
onCLose: () => void
}

export const LoginModal = ({ className, isOpen, onCLose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onCLose={onCLose}
        lazy
    >
        <LoginForm />
    </Modal>
);
