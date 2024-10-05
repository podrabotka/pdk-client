import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '@/entities/User/api/services/auth';
import { IAuthParams, IAuthResponse } from '@/entities/User/model/types';

import { toastrError } from '@/shared/utils/error/toastrError';
import { IRegisterForm } from '@/features/Auth/components/byCredentials/type';

export const register = createAsyncThunk<IAuthResponse, IRegisterForm>(
	'auth/signup',
	async (authData, thunkApi) => {
		try {
			const data = await AuthService.register(authData);
			toastr.success('Регистрация', 'Завершена успешно');
			return data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthResponse, IAuthParams>(
	'auth/signin',
	async (authData, thunkApi) => {
		try {
			const data = await AuthService.login(authData);
			toastr.success('Вход', 'Завершен успешно');
			return data;
		} catch (error) {
			toastrError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	try {
		await AuthService.logout();
	} catch (error) {
		toastrError(error);
		return thunkApi.rejectWithValue(error);
	}
});

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/refresh', async (_, thunkApi) => {
	try {
		const data = await AuthService.getNewTokens();
		return data;
	} catch (error) {
		toastrError('Выход', 'Ваш сеанс закончен, пожалуйста, снова войдите в систему');
		// thunkApi.dispatch(logout());
		await thunkApi.dispatch(logout()).unwrap();
		return thunkApi.rejectWithValue(error);
	}
});
