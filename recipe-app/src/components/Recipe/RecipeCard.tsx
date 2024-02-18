import { TRecipe } from '@/types';
import React from 'react';

const RecipeCard = ({ recipe }: { recipe: TRecipe }) => {
	return (
		<div className="flex flex-col rounded-xl border border-black p-4">
			<h2 className="text-2xl font-bold">{recipe.title}</h2>

			<h3 className="text-lg font-bold">Ingredients</h3>
			<ul className="list-inside list-disc">
				{recipe.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>

			<h3 className="text-lg font-bold">Instructions</h3>
			<ol className="list-inside list-decimal">
				{recipe.instructions.map((instruction, index) => (
					<li key={index}>{instruction}</li>
				))}
			</ol>
		</div>
	);
};

export default RecipeCard;
