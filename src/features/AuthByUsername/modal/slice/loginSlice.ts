import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginSchema } from '../types/loginSchema';
import { loginByUsename } from '../services/loginByUsername/loginByUsername';

const initialState: loginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsename.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsename.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsename.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducers } = loginSlice;
