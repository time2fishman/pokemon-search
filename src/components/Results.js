import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Results({ searchParams }) {
	// pull the query out of the URL
	const requestedSearch = searchParams.get('query');
	// handle API results
	const [results, setResults] = useState(null);
    const [error, setError] = useState(false);

	useEffect(() => {
		// on page load, fetch the requested data from the api
		const url = `https://pokeapi.co/api/v2/pokemon/${requestedSearch}`;
		fetch(url)
			.then((res) => {
                if (res.status === 404) {
                    return setError(true)
                }
				return res.json();
			})
			.then((data) => {
                // console.log(data)
				setResults(data);
			})
			.catch((err) => {
				// console.log(err);
			});
	}, []);

	// if the user gets to this page without submitting a query, show an error message
	if (!requestedSearch) {
		return (
			<div>
				Oops, you must enter a search query! Click <Link to='/'>here</Link> to
				go back.
			</div>
		);
	}

    if (error) {
        return (
            <div>
                <p>No results for {requestedSearch}. Click <Link to='/'>here</Link>{' '} to go back and try another search.</p>
            </div>
        )
    }

	// while results are loading, return null
	if (!results) {
		return null;
	}

	// when results have loaded, show information
	return (
		<div>
			<p>Showing results for {requestedSearch}:</p>
			<section>
				<h2>Name: {results.name}</h2>
				<div>
					<img src={results.sprites.front_default} alt={results.name} />
				</div>
				<h3>Species: {results.species.name}</h3>
				<small>
					Height: {results.height}, Weight: {results.weight}
				</small>
			</section>
		</div>
	);
}

export default Results;