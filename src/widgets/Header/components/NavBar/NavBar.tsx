'use client';
import cn from 'classnames';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from '../../constants';
import styles from './NavBar.module.css';
import { useAuth } from '@/entities/User';
import { useActions } from '@/shared/hooks/useActions';

const NavBar = () => {
	const currentPath = usePathname();
	const router = useRouter();

	const { user } = useAuth();
	const { logout } = useActions();

	const handleAuthAction = async () => {
		if (user) {
			logout();
		} else {
			router.push('/auth/login');
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Box sx={{ display: 'flex', gap: '16px' }}>
				{navLinks.map(({ name, path }) => (
					<Link className={cn(styles.link, { [styles.active]: currentPath === path })} href={path}>
						<Typography>{name}</Typography>
					</Link>
				))}
			</Box>

			<Button
				variant='contained'
				color='secondary'
				onClick={handleAuthAction}
				sx={{
					borderRadius: '20px',
					ml: 3,
				}}
			>
				{user ? 'Выйти' : 'Войти'}
			</Button>
		</Box>
	);
};

export default NavBar;
