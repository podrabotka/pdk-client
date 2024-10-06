import { VacancyService } from '@/entities/Vacancy/api';
import { IVacancy, IVacancyFilters, IVacancyRes } from '@/entities/Vacancy/model/types';
import { useState } from 'react';
import { useMutation } from 'react-query';

export const useVacancies = () => {
	const [vacancies, setVacancies] = useState<IVacancy[]>([]);
	const [pageToken, setPageToken] = useState<string | undefined>();
	const [isReset, setIsReset] = useState(false);

	const { mutate: getVacancies, isLoading } = useMutation({
		mutationFn: (data?: IVacancyFilters, reset?: boolean) => {
			if (reset) setIsReset(reset);
			return VacancyService.getByFilters(data);
		},
		onSuccess: (res: IVacancyRes) => {
			setVacancies(prevVacancies => (isReset ? res.data : [...prevVacancies, ...res.data]));
			setPageToken(res.pageToken);
		},
	});

	return { vacancies, pageToken, isLoading, getVacancies, setVacancies };
};
