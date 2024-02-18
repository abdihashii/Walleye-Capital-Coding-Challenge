import React from 'react';

export default async function RecipePage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	return (
		<main>
			<h1>Recipe page for recipe with id: {params.id}</h1>
		</main>
	);
}
