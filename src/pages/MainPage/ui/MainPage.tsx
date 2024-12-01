import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');
    const { t } = useTranslation('main');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input placeholder={t('Введите текст')} value={value} onChange={onChange} />
        </div>
    );
};

export default MainPage;
