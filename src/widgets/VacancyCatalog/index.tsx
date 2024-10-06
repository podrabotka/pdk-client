'use client';
import { useVacancies, VacancyFilters, VacancyList } from '@/entities/Vacancy';
import { IVacancyFilters } from '@/entities/Vacancy/model/types';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFiltersForm {
	name?: string;
	categories?: number[];
}

const VacancyCatalog = () => {
	const { vacancies, pageToken, getVacancies, isLoading } = useVacancies();
	const [filters, setFilters] = useState<IVacancyFilters | undefined>();

	// useEffect(() => {
	// 	if (filters) getVacancies(filters);
	// }, [filters]);

	useEffect(() => {
		getVacancies();
	}, []);

	return (
		<Box>
			<VacancyFilters setFilters={setFilters} />
			<VacancyList vacancies={vacancies} pageToken={pageToken} setFilters={setFilters} />
		</Box>
	);
};

export default VacancyCatalog;
