import { getRecipeFromId } from '@/lib/utils';
import React from 'react';

import RecipeCard from '@/components/Recipe/RecipeCard';
import AIEnhacement from '@/components/Recipe/AIEnhacement';

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
			<section className="w-full flex-col items-center rounded-xl border border-black p-5">
				<h1>{error}</h1>
			</section>
		);
	}

	return (
		<>
			<RecipeCard
				recipe={recipe}
				isPage={true}
			/>

			<section className="flex w-1/2 flex-col items-center gap-8 rounded-xl border-2 border-black p-6">
				<h2 className="text-2xl font-semibold capitalize">
					Use AI to get the history of: &quot;{recipe.title}&quot;
				</h2>

				<AIEnhacement title={recipe.title} />
			</section>
		</>
	);
}
