import { IVacancyFilters } from '@/entities/Vacancy/model/types';
import { Input } from '@/shared/UI/form-elements';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const options = [
	{ label: '111', value: 'one' },
	{ label: '222', value: 'two' },
];

interface IProps {
	setFilters: Dispatch<SetStateAction<IVacancyFilters>>;
}

interface IFiltersForm {
	name?: string;
	categories?: string[];
	pageToken?: string;
}

export const VacancyFilters = ({ setFilters }: IProps) => {
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<IFiltersForm>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<IFiltersForm> = data => {
		setFilters({
			q: {
				name: data.name,
			},
			pagination: {
				pageSize: 10,
				pageToken: data.pageToken,
			},
		});
	};

	return (
		<Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ display: 'flex', gap: 3 }}>
			<Input {...register('name')} placeholder='Поиск' fullWidth />
			<Autocomplete
				fullWidth
				disablePortal
				options={options}
				getOptionLabel={option => option.label}
				onChange={(event, newValue) => {
					console.log(newValue);
					setValue('categories', newValue ? [newValue.value] : []);
				}}
				renderInput={params => <TextField {...params} label='Категории' />}
			/>
			<Button type='submit' variant='contained' fullWidth>
				применить
			</Button>
		</Box>
	);
};
