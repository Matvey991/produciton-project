import { StateSchema } from 'app/Providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
