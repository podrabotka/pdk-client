"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import AuthProvider from "@/app/providers/all/withAuth";
import { createReduxStore } from "@/app/store";

import ToastProvider from "./all/withToast";

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
						{children}
					</QueryClientProvider>
				</AuthProvider>
			</Provider>
		</>
	);
};

export default Providers;
