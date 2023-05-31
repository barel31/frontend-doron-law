import { createClient } from 'next-sanity';

const client = createClient({
	projectId: 'x8i9kfg9',
	dataset: 'production',
	apiVersion: '2022-05-29',
	useCdn: true, // use cache
});

export default function IndexPage({ pets }: { pets: Array<object> }) {
	return (
		<>
			<header>
				<h1>Sanity + Next.js</h1>
			</header>
			<main>
				<h2>pets</h2>
				{pets.length > 0 && (
					<ul>
						{pets.map((pet: any) => (
							<li key={pet._id}>{pet?.name}</li>
						))}
					</ul>
				)}
				{!pets.length && <p>No pets to show</p>}
				{pets.length > 0 && (
					<div>
						<pre>{JSON.stringify(pets, null, 2)}</pre>
					</div>
				)}
				{!pets.length && (
					<div>
						<div>¯\_(ツ)_/¯</div>
						<p>
							Your data will show up here when you've configured
							everything correctly
						</p>
					</div>
				)}
			</main>
		</>
	);
}

export async function getStaticProps() {
	const pets = await client.fetch(`*[_type == "routes"]`);

	return {
		props: {
			pets,
		},
	};
}
