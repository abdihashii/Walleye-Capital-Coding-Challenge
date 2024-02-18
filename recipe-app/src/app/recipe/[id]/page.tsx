import { getRecipeFromId } from '@/lib/utils';
import React from 'react';

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
			<section className="flex w-full justify-center rounded-xl border border-black p-5 2xl:w-3/4">
				<div className="flex w-fit flex-col gap-8">
					<h1 className="text-4xl font-bold text-blue-700">{recipe.title}</h1>

					<div>
						<h2 className="text-2xl font-bold">Ingredients</h2>
						<ul>
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-bold">Instructions</h2>
						<ol>
							{recipe.instructions.map((instruction, index) => (
								<li key={index}>{instruction}</li>
							))}
						</ol>
					</div>
				</div>
			</section>
		</main>
	);
}
