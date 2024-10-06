import VacancyCatalog from '@/widgets/VacancyCatalog';
import { Container, Typography } from '@mui/material';

export default function Login() {
	return (
		<Container maxWidth='lg'>
			<Typography variant='h1' gutterBottom>
				Вакансии
			</Typography>
			<VacancyCatalog />
		</Container>
	);
}
