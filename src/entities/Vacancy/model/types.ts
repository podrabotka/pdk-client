export interface IVacancyFilters {
	q?: {
		name?: string;
		categories?: number[];
	};
	pagination?: {
		pageSize?: number;
		pageToken?: string;
	};
}

export interface IVacancy {
	id: string;
	title: string;
	description: string;
	createdAt: Date;
	categoryId: number | null;
}

export interface IVacancyRes {
	pageToken: string;
	data: IVacancy[];
}
