import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { userReducers } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducers,
        user: userReducers,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
