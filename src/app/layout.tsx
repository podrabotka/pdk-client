import cn from 'classnames';
import Providers from '@/app/providers';
import { createMetadata } from '@/shared/config/seo/meta.config';
import Header from '@/widgets/Header';
import { Roboto, Sofia_Sans } from 'next/font/google';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './globals.css';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-roboto',
});

const sofia = Sofia_Sans({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-sofia',
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
			<body className={cn(roboto.variable, sofia.variable)}>
				<Providers>
					<Header />
					<main className='main'>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
