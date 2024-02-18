'use client';

import React, { useState } from 'react';

import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

const AIEnhacement = ({ title }: { title: string }) => {
	const [history, setHistory] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchHistory = async () => {
		setLoading(true);

		try {
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

			const json = await response.json();

			setHistory(json.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<Button
				className="w-32"
				onClick={fetchHistory}
			>
				{loading ? <Loader2 className="animate-spin" /> : 'Get History'}
			</Button>

			{history && <p>{history}</p>}
		</div>
	);
};

export default AIEnhacement;
