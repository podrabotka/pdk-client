import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IVacancy } from '@/entities/Vacancy/model/types';

interface IProps {
	vacancy: IVacancy;
}

export function VacancyCard({ vacancy }: IProps) {
	return (
		<Card sx={{ width: '100%' }}>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{vacancy.title}
				</Typography>
				<Typography variant='body2' sx={{ color: 'text.secondary' }}>
					{vacancy.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Откликнуться</Button>
			</CardActions>
		</Card>
	);
}
