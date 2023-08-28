const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=63ef5e34'

export const getMovies = async (search: string) => {
    try {
        const response = await fetch(`${url}&s=${search}`);
        const data = await response.json();
        return data.Search;
    }
    catch (error) {
        console.log(error);
    }
};