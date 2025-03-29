import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9b4ba11e7a2e691c056914d14bda254b',
        language: 'es',
    },
});
