import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notifications';
import NotificationIcon from 'shared/assets/icons/Notification.svg';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
   className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            direction="bottom left"
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon inverted Svg={NotificationIcon} />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
