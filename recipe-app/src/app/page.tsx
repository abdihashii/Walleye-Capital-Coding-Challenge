'use client';

import { useFormState } from 'react-dom';
import { searchRecipesAction } from '@/server/actions';
import { mockRecipeData } from '@/server/db';

import SearchForm from '@/components/Search/SearchForm';
import SearchResults from '@/components/Search/SearchResults';

export default function Home() {
	// I'm keeping this a client component because I want to share the form state
	// and action variables with two separate child components
	// (SearchForm and SearchResults)
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
					<SearchResults state={state} />
				) : (
					<p className="text-red-500">
						No recipes found with the title: {state.title}. Please try again.
					</p>
				)}
			</section>
		</main>
	);
}
