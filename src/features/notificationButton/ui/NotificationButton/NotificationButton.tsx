import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notifications';
import NotificationIcon from '@/shared/assets/icons/Notification.svg';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
   className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
