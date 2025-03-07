import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();

    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </VStack>
    );
});
