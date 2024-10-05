import { Typography } from '@mui/material';
import Link from 'next/link';

import styles from './styles.module.css';

interface IProps {
	text: string;
	linkText: string;
	href: string;
}

export const FormLinkText = ({ text, linkText, href }: IProps) => {
	return (
		<Typography>
			{text}{' '}
			<Link className={styles.link} href={href}>
				{linkText}
			</Link>
		</Typography>
	);
};
