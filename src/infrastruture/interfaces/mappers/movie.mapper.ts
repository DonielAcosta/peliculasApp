import { FullMovie, Movie } from '../../../core/uses-cases/movies/entities/movie.entity';
import type { MovieDBMovie, Result } from '../movie-db.response';

export class MovieMapper {
    static fromMovieDBResultToEntity(result: Result):Movie {
        return {
            id: result.id,
            title: result.title,
            releaseDate: new Date(result.release_date),
            description: result.overview,
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w1280${result.backdrop_path}`,
        };
    }

    static fromMovieDBToEntity(movie:MovieDBMovie): FullMovie{
        return{
            id: movie.id,
            title: movie.title,
            releaseDate: new Date(movie.release_date),
            description: movie.overview,
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map((company) => company.name),
        };
    }
}

