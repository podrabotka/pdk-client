import { IAuthResponse, ITokens } from '@/entities/User';

export const saveTokensToStorage = (data: ITokens) => {
	localStorage.setItem('accessToken', data.accessToken);
	localStorage.setItem('refreshToken', data.refreshToken);
};

export const removeTokensFromStorage = () => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
};

export const saveUserDataToStorage = (data: IAuthResponse) => {
	saveTokensToStorage(data);
	localStorage.setItemItem('user', JSON.stringify(data.user));
};

export const clearUserDataFromStorage = () => {
	removeTokensFromStorage();
	localStorage.removeItem('user');
};
