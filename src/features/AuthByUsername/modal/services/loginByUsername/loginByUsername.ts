import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

interface loginByUsenameProps {
    username: string
    password: string
}

export const loginByUsename = createAsyncThunk<User, loginByUsenameProps, {rejectValue: string}>(
    'login/fetchByIdStatus',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            // return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
