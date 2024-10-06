import { VacancyCard } from '@/entities/Vacancy/components/VacancyCard/VacancyCard';
import { IVacancy, IVacancyFilters } from '@/entities/Vacancy/model/types';
import { List, ListItem } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface IProps {
	vacancies: IVacancy[];
	pageToken?: string;
	// getVacancies: (filters: IVacancyFilters) => void;
	setFilters: Dispatch<SetStateAction<IVacancyFilters>>;
}

export const VacancyList = ({ vacancies, pageToken, setFilters }: IProps) => {
	const lastElement = useRef<HTMLLIElement | null>(null);

	return (
		<List sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
			{vacancies.map(vacancy => (
				<ListItem key={vacancy.id} sx={{ padding: 0 }}>
					<VacancyCard vacancy={vacancy} />
				</ListItem>
			))}
			<ListItem id='last-item' ref={lastElement} />
		</List>
	);
};
