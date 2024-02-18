import AppQueryProvider from '@/providers/AppQueryProvider';

export default function RecipeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<AppQueryProvider>{children}</AppQueryProvider>
			</body>
		</html>
	);
}
