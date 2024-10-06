import { IVacancy, IVacancyFilters, IVacancyRes } from '@/entities/Vacancy/model/types';
import { axiosClassic } from '@/shared/api';
import { getVacancyUrl } from '@/shared/config/api.config';

export const VacancyService = {
	async getByFilters(filters?: IVacancyFilters) {
		const { data } = await axiosClassic.post<IVacancyRes>(getVacancyUrl('list'), filters);
		return data;
	},
};
