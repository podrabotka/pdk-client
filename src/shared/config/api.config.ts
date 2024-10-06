export const API_URL = `${process.env.SERVER_URL}/api`;

export const getAuthUrl = (path: string) => `/auth/${path}`;
export const getUserUrl = (path: string) => `/users/${path}`;
export const getRoleUrl = (path: string) => `/role/${path}`;
export const getRatingUrl = (path: string) => `/ratings/${path}`;
export const getVacancyUrl = (path: string) => `/vacancy/${path}`;
