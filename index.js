export async function wikidataQuery(query){
	const params = new URLSearchParams({format:'json',query})
	return fetch(`https://query.wikidata.org/sparql?${params}`)
		.then( response => response.json() )
		.then( data => data.results.bindings )
}


export function values(IDs){
	return IDs.map( id =>`wd:${id}`).join(' ')
}
