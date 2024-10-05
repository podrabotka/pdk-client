export interface IUser {
	_id: string;
	email: string;
	isAdmin?: boolean;
	roles: number[];
	createdAt: string;
}

export interface ITokens {
	access_token: {
		token: string;
		exp: number;
	};
	refresh_token: {
		token: string;
		exp: number;
	};
}

export interface IUserData {
	user: IUser | null;
	isLoading: boolean;
}

export interface IAuthResponse extends ITokens {
	user: IUser;
}

export interface IAuthParams {
	email: string;
	password: string;
	deviceId: string;
	unp?: string;
}
