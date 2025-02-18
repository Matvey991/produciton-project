import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsActions, articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    user: { id: '1', username: 'fda' },
    blocks: [],
};

describe('articleDetailsSlice.test', () => {
});
test('test update profile service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
        isLoading: false,
    };
    expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
    )).toEqual({
        isLoading: true,
        ValidateProfileErrors: undefined,
    });
});
test('test update profile service fullfiled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
        isLoading: true,
    };
    expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', ''),
    )).toEqual({
        isLoading: false,
        data,
    });
});
