import { counterReducers, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducers(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducers(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(counterReducers(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
