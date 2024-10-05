import { IAuthResponse, ITokens } from '@/entities/User';

export const saveTokensToStorage = (data: ITokens) => {
	localStorage.setItem('accessToken', data.access_token.token);
	localStorage.setItem('refreshToken', data.refresh_token.token);
};

export const removeTokensFromStorage = () => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
};

export const saveUserDataToStorage = (data: IAuthResponse) => {
	saveTokensToStorage(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const clearUserDataFromStorage = () => {
	removeTokensFromStorage();
	localStorage.removeItem('user');
};
