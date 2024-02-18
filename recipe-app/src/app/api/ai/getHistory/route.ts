import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
	// Get the title from the request body
	const { title } = await req.json();

	const prompt = `
    Please help us understand the history of the meal: ${title}. Please be as descriptive as possible while keeping it concise in 1-3 sentences.
  `;

	const response = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: [
			{
				role: 'system',
				content:
					"You are a brilliant chef assistant with the knowledge of the entire world's cuisine and cultures. You are here to help me understand the history of the meal.",
			},
			{
				role: 'user',
				content: prompt,
			},
		],
	});

	if (!response.choices[0].message.content) {
		return Response.json(
			{
				data: 'No data found',
			},
			{
				status: 404,
			},
		);
	}

	return Response.json(
		{
			data: response.choices[0].message.content,
		},
		{
			status: 200,
		},
	);
}
