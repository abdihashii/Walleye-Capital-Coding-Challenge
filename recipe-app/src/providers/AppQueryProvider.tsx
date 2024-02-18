'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const AppQueryProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default AppQueryProvider;
