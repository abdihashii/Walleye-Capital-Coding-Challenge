import React from 'react';

export default async function RecipePage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1>Recipe page for recipe with id: {params.id}</h1>
		</main>
	);
}
