'use server';

import { revalidatePath } from 'next/cache';
import { getRecipesFromTitle } from '@/lib/utils';
import { TRecipe } from '@/types';

import { mockRecipeData } from './db';

/**
 * This function is called when the search form is submitted. It searches the
 * recipe database for a recipe with the given title with the help of the
 * `getRecipesFromTitle` function. If no title is provided, it returns all
 * recipes. It then returns the title and an array of recipes that match the
 * title. The promise will reject if there is an error.
 * @param prevState - The previous state of the form
 * @param formData - The form data from the form submission
 * @returns - A promise that resolves with the new state of the form after
 * the search is complete
 */
export const searchRecipesAction = async (
	prevState: {
		title: string;
		recipes: Array<TRecipe>;
		success: boolean;
	},
	formData: FormData,
): Promise<{
	title: string;
	recipes: Array<TRecipe> | [];
	success: boolean;
}> => {
	const inputTitle = formData.get('title') as string;

	if (!inputTitle) {
		return {
			title: '',
			recipes: mockRecipeData, // Return all recipes if no title is provided
			success: true, // Return success if no title is provided because we are returning all recipes
		};
	}

	try {
		const { title, recipes, error } = await getRecipesFromTitle(inputTitle);

		if (error || !recipes || recipes.length === 0 || !title) {
			throw new Error(error);
		}

		// Revalidate the home page's cache with the new data
		revalidatePath('/');

		// Finally, return the data to the server component
		return {
			title,
			recipes,
			success: true,
		};
	} catch (error) {
		console.error(error);

		return {
			title: inputTitle, // We still want to return the title that was searched for even if there was an error for proper error handling
			recipes: [],
			success: false,
		};
	}
};
