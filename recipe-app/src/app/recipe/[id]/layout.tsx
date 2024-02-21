import AppQueryProvider from '@/providers/AppQueryProvider';

export default function RecipeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
			<AppQueryProvider>{children}</AppQueryProvider>
		</main>
	);
}
