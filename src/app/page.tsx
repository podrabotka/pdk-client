import { Container } from '@mui/material';
import Image from 'next/image';
import styles from './page.module.css';

export default function MainPage() {
	return (
		<div className={styles.page}>
			<Container maxWidth='lg'>
				<div className={styles.info}>
					<Image
						className={styles.image}
						src='/images/team_up.svg'
						alt='work-together'
						layout='responsive'
						width={400}
						height={500}
					/>
					<div className={styles.textBlock}>
						<p className={styles.text}>
							<span>
								Наша миссия - объединение студентов и заказчиков, чтобы гарантировать качество услуг
								в безопасной среде.
							</span>
							<span>
								Мы помогаем студентам зарабатывать и накапливать опыт, который будет ценен при
								поиске работы в будущем.
							</span>
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
