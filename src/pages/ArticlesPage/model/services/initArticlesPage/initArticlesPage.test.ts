// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { initArticlesPage } from './initArticlesPage';

// jest.mock('./initArticlesPage');

// describe('initArticlesPage.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(initArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: true,
//                 hasMore: true,
//                 _inited: true,
//             },
//         });
//         await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(initArticlesPage).toHaveBeenCalledWith({ inited: true });
//     });
//     // test('fetchArticleList not called', async () => {
//     //     const thunk = new TestAsyncThunk(initArticlesPage, {
//     //         articlesPage: {
//     //             page: 2,
//     //             ids: [],
//     //             entities: {},
//     //             limit: 5,
//     //             isLoading: false,
//     //             hasMore: false,
//     //         },
//     //     });
//     //     await thunk.callThunk();

//     //     expect(thunk.dispatch).toBeCalledTimes(2);
//     //     expect(fetchArticlesList).not.toHaveBeenCalled();
//     // });
//     // test('loading true', async () => {
//     //     const thunk = new TestAsyncThunk(initArticlesPage, {
//     //         articlesPage: {
//     //             page: 2,
//     //             ids: [],
//     //             entities: {},
//     //             limit: 5,
//     //             isLoading: true,
//     //             hasMore: true,
//     //         },
//     //     });
//     //     await thunk.callThunk();

//     //     expect(thunk.dispatch).toBeCalledTimes(2);
//     //     expect(fetchArticlesList).not.toHaveBeenCalled();
//     // });
// });
