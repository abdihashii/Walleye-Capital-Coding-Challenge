import { getRecipeFromId } from '@/lib/utils';
import React from 'react';

import RecipeCard from '@/components/Recipe/RecipeCard';

export default async function RecipePage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	const recipeData = await getRecipeFromId(params.id);

	const { error, recipe } = recipeData;

	if (error || !recipe) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center p-24">
				<section className="w-full flex-col items-center rounded-xl border border-black p-5">
					<h1>{error}</h1>
				</section>
			</main>
		);
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<RecipeCard
				recipe={recipe}
				isPage={true}
			/>
		</main>
	);
}
