import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ThunkConfig } from './config/StateSchema';
import { ReduxStoreWithManager, StateSchemaKey } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkConfig,
};

export type {
    AppDispatch,
    ReduxStoreWithManager,
    StateSchemaKey,
};
