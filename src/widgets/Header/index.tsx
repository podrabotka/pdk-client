import { AppBar, Container, Toolbar } from '@mui/material';

import NavBar from './components/NavBar/NavBar';

const Header = () => {
	return (
		<AppBar sx={{ bgcolor: '#F4F4F4', boxShadow: 'none' }} position='fixed'>
			<Container maxWidth='xl'>
				<Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<NavBar />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
