import React from 'react';
import { TRecipe } from '@/types';

import RecipeCard from '../Recipe/RecipeCard';

const SearchResults = ({
	state,
}: {
	state: {
		title: string;
		recipes: Array<TRecipe>;
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
