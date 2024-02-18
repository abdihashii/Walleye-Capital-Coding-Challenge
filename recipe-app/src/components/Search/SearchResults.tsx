import React from 'react';
import RecipeCard from '../Recipe/RecipeCard';
import { TRecipe } from '@/types';

const SearchResults = ({
	state,
}: {
	state: {
		title: string;
		recipes: TRecipe[];
		success: boolean;
	};
}) => {
	return (
		<article className="grid w-full grid-cols-3 gap-4">
			{state.recipes.map((recipe) => (
				<RecipeCard
					key={recipe.id}
					recipe={recipe}
				/>
			))}
		</article>
	);
};

export default SearchResults;
