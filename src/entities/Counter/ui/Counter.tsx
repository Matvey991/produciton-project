import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { decrement, increment, addFive } = useCounterActions();
    const incrementHandle = () => {
        increment();
    };

    const decrementHandle = () => {
        decrement();
    };

    const addFiveHandle = () => {
        addFive(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={incrementHandle}>{t('increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrementHandle}>{t('decrement')}</Button>
            <Button data-testid="decrement-btn" onClick={addFiveHandle}>{t('add5')}</Button>
        </div>
    );
};
