'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { searchRecipesAction } from '@/server/actions';
import { mockRecipeData } from '@/server/db';

import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RecipeCard from '@/components/Recipe/RecipeCard';

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			className="h-12 w-32"
			type="submit"
		>
			{pending ? <Loader2 className="animate-spin" /> : 'Search'}
		</Button>
	);
};

export default function Home() {
	const [state, formAction] = useFormState(searchRecipesAction, {
		title: '',
		recipes: mockRecipeData, // The initial state is all recipes
		success: true, // The initial state is successful because we are returning all recipes
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="flex w-full flex-col items-center gap-8 rounded-xl border border-black p-5">
				<form
					action={formAction}
					className="flex w-3/4 flex-row gap-2"
				>
					<Input
						className="h-12"
						placeholder="Search for recipes..."
						type="search"
						name="title"
						autoFocus={true}
					/>

					<SubmitButton />
				</form>

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
