'use client';

import { useFormState } from 'react-dom';
import { searchRecipesAction } from '@/server/actions';
import { mockRecipeData } from '@/server/db';

import RecipeCard from '@/components/Recipe/RecipeCard';
import SearchForm from '@/components/Search/SearchForm';

export default function Home() {
	const [state, formAction] = useFormState(searchRecipesAction, {
		title: '',
		recipes: mockRecipeData, // The initial state is all recipes
		success: true, // The initial state is successful because we are returning all recipes
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="flex w-full flex-col items-center gap-8 rounded-xl border border-black p-5">
				<SearchForm formAction={formAction} />

				{state.success ? (
					<article className="grid w-full grid-cols-3 gap-4">
						{state.recipes.map((recipe) => (
							<RecipeCard
								key={recipe.id}
								recipe={recipe}
							/>
						))}
					</article>
				) : (
					<p className="text-red-500">
						No recipes found with the title: {state.title}. Please try again.
					</p>
				)}
			</section>
		</main>
	);
}
