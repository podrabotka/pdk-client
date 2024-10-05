import axios, { AxiosError } from "axios";

import { AuthService } from "@/entities/User";

import { createAxiosInstance } from "@/shared/utils/axios";

export const axiosClassic = createAxiosInstance();
export const $api = createAxiosInstance(true);

axiosClassic.interceptors.response.use(
	response => response,
	(error: AxiosError) => {
		if (axios.isCancel(error))
			global.console.log("Request canceled", error.message);
		return Promise.reject(error);
	}
);

$api.interceptors.response.use(
	config => {
		return config;
	},
	async error => {
		const originalRequest = error.config;
		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await AuthService.getNewTokens();
				return $api.request(originalRequest);
			} catch (e) {
				await AuthService.logout();
				console.log("NOT AUTHORIZED");
			}
		}
		throw error;
	}
);
