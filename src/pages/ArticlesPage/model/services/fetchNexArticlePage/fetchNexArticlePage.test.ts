import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNexArticlePage } from './fetchNexArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchNexArticlePage/fetchNexArticlePage');

describe('fetchNexArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNexArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNexArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('loading true', async () => {
        const thunk = new TestAsyncThunk(fetchNexArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
