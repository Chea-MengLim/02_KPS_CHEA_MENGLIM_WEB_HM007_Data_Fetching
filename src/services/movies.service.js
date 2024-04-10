// get all movies
export async function getAllMoviesService () {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api', {cache : "no-store"});
    const data = await res.json();
    return data;
}

// get moives by genre
export async function getMovieByGenreService (genre) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`, {cache : "no-store"});
    const data = await res.json();
    return data;
}

export async function getMovieByIdService(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`, {cache : "no-store"});
    const data = await res.json();
    return data;
}