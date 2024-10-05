import Providers from '@/app/providers';
import { createMetadata } from '@/shared/config/seo/meta.config';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});

export const metadata = createMetadata({
	title: 'Подработка',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={roboto.variable}>
				<Providers>{<main className='main'>{children}</main>}</Providers>
			</body>
		</html>
	);
}
