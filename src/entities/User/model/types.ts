export interface IUser {
	_id: string;
	email: string;
	isAdmin?: boolean;
	roles: number[];
	createdAt: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
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
	unp?: string;
	isEmployer: boolean;
}
