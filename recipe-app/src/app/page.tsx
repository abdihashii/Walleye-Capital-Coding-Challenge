import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="flex w-full flex-col items-center gap-8 rounded-xl border border-black p-5">
				<form className="flex w-3/4 flex-row gap-2">
					<Input
						className="h-12"
						placeholder="Search for recipes..."
						type="search"
						name="title"
						autoFocus={true}
					/>

					<Button
						className="h-12"
						type="submit"
					>
						Search
					</Button>
				</form>
			</section>
		</main>
	);
}
