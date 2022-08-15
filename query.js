const API = 'https://query.wikidata.org/sparql'

export async function wikidataQuery(query){
	const params = new URLSearchParams({format:'json',query})
	return fetch(`${API}?${params}`)
		.then( response => response.json() )
		.then( data => data.results.bindings )
}
