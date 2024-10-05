'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import AuthProvider from '@/app/providers/all/withAuth';
import { createReduxStore } from '@/app/store';

import ToastProvider from './all/withToast';
import theme from '@/app/theme';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Provider store={createReduxStore()}>
				<AuthProvider>
					<ToastProvider />
					<QueryClientProvider client={queryClient}>
						<AppRouterCacheProvider>
							{<ThemeProvider theme={theme}>{children}</ThemeProvider>}
						</AppRouterCacheProvider>
					</QueryClientProvider>
				</AuthProvider>
			</Provider>
		</>
	);
};

export default Providers;
