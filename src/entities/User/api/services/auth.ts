import { IAuthParams, IAuthResponse } from '@/entities/User';
import { IRegisterForm } from '@/features/Auth/components/byCredentials/type';

import { axiosClassic } from '@/shared/api';
import { getAuthUrl } from '@/shared/config/api.config';
import { clearUserDataFromStorage, saveUserDataToStorage } from '@/shared/utils/storage/storage';

export const AuthService = {
	async register(data: IRegisterForm): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('signup'), data);

		if (response.data.access_token) saveUserDataToStorage(response.data);
		return response.data;
	},

	async login(data: IAuthParams): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('signin'), data);
		if (response.data.access_token) saveUserDataToStorage(response.data);
		return response.data;
	},

	async logout() {
		clearUserDataFromStorage();
	},

	async getNewTokens(): Promise<IAuthResponse> {
		const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('refresh'), {
			refresh_token: localStorage.getItem('refreshToken'),
		});

		if (response.data.access_token) saveUserDataToStorage(response.data);
		return response.data;
	},
};
