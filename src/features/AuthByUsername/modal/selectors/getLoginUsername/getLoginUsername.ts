import { StateSchema } from 'app/Providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
