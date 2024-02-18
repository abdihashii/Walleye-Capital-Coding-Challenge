'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const AIEnhacement = ({ title }: { title: string }) => {
	// A state to make sure we only fetch the history on button click
	const [fetchEnabled, setFetchEnabled] = useState(false);

	const fetchHistory = async () => {
		const response = await fetch('/api/ai/getHistory', {
			method: 'POST',
			body: JSON.stringify({ title }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const json: {
			data: string;
		} = await response.json();

		return json;
	};

	const {
		data: history,
		error,
		isLoading,
	} = useQuery({
		queryKey: ['history', title], // Including the title because there are a lot of recipes
		queryFn: fetchHistory,
		gcTime: 1000 * 60 * 60 * 24, // Cache the data for 24 hours
		enabled: fetchEnabled,
	});

	if (error) {
		return (
			<div>
				<p className="text-red-500">Error: {error.message}</p>
			</div>
		);
	}

	const handleGetHistory = () => {
		setFetchEnabled(true);
	};

	return (
		<div className="flex w-full flex-col items-center gap-4">
			<Button
				className="w-32"
				onClick={handleGetHistory}
				disabled={isLoading || history ? true : false}
			>
				{isLoading ? <Loader2 className="animate-spin" /> : 'Get History'}
			</Button>

			{history ? (
				<p className="text-center">{history.data}</p>
			) : (
				isLoading && (
					<div className="w-full space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-full" />
					</div>
				)
			)}
		</div>
	);
};

export default AIEnhacement;
