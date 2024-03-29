'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

import { Loader2 } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

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

const SearchForm = ({
	formAction,
}: {
	formAction: (payload: FormData) => void;
}) => {
	return (
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
				data-testid="search-input"
			/>

			<SubmitButton />
		</form>
	);
};

export default SearchForm;
