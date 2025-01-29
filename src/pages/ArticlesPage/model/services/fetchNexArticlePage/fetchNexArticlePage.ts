import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNexArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNexArticlePage',
        async (_, thunkApi) => {
            const {
                dispatch, getState,
            } = thunkApi;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
