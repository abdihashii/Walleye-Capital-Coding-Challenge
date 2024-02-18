import { mockRecipeData } from '@/server/db';
import { TRecipe } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * This function searches the recipe database for a recipe with the given title.
 * @param title - The title of the recipe to search for in the database
 * @returns - A promise that resolves when the search is complete with the
 * title and an array of recipes that match the title. The promise will reject
 * if there is an error.
 */
export function getRecipesFromTitle(title: string): Promise<{
	error?: string;
	title?: string;
	recipes?: Array<TRecipe>;
}> {
	// Filter the recipes by title if title is provided, otherwise return all recipes
	const filteredRecipes = title
		? mockRecipeData.filter((recipe) =>
				recipe.title.toLowerCase().includes(title.toLowerCase()),
			)
		: mockRecipeData;

	if (!filteredRecipes || filteredRecipes.length === 0) {
		const errorMessage = `Unable to find the recipe with the title: ${title}`;

		return Promise.resolve({ error: errorMessage });
	}

	return Promise.resolve({ title, recipes: filteredRecipes });
}
