import { TRecipe } from '@/types';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const RecipeCard = ({
	recipe,
	isPage = false,
}: {
	recipe: TRecipe;
	isPage?: boolean;
}) => {
	return (
		<div className="flex flex-col gap-8 rounded-xl border-2 border-black p-4">
			<div className="flex flex-row items-start gap-4">
				{isPage && (
					<Link
						href="/"
						className="rounded-lg bg-gray-300 p-2 transition-all duration-300 hover:bg-gray-400"
					>
						<ArrowLeft className="h-6 w-6" />
					</Link>
				)}
				<h2 className="line-clamp-3 h-28 text-2xl font-bold">
					<Link
						href={`/recipe/${recipe.id}`}
						className="text-blue-600 transition-all duration-300 hover:text-blue-800 hover:underline"
					>
						{recipe.title}
					</Link>
				</h2>
			</div>

			<div>
				<h3 className="text-lg font-bold">Ingredients</h3>
				<ul className="h-[72px] list-inside list-disc overflow-y-scroll">
					{recipe.ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</div>

			<div>
				<h3 className="text-lg font-bold">Instructions</h3>
				<ol className="h-[72px] list-inside list-decimal overflow-y-scroll">
					{recipe.instructions.map((instruction, index) => (
						<li key={index}>{instruction}</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default RecipeCard;
