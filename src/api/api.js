import axios from "axios";

const API_KEY = 'd3ab88c1c4da9baa38cb88803fe963d1';

axios.defaults.baseURL = 'https://www.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
    const res = await axios.get(`trending/movie/day`);
    return res.data.results;
};

export const fetchMovieByQuery = async movieName => {
    const res = await axios.get(`search/movie?query=${movieName}`);
    return res.data.results;
};

export const fetchMovieDetails = async movieId => {
    const res = await axios.get(`movie/${movieId}`);
    return res.data;
};

export const fetchMovieCast = async movieId => {
    const res = await axios.get(`movie/${movieId}/credits?`);
    return res.data.cast;
};

export const fetchMovieReviews = async movieId => {
    const res = await axios.get(`movie/${movieId}/reviews?`);
    return res.data.results;
};
