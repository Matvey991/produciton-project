import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '1234',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('1234');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
