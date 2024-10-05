'use client';

import { useAuthRedirect } from '@/entities/User/hooks/useAuthRedirect';

import styles from './layout.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	useAuthRedirect();

	return <section className={styles.layout}>{children}</section>;
}
