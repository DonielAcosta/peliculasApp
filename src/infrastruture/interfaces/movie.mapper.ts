import { Movie } from '../../core/uses-cases/movies/entities/movie.entity';
import type { Result } from './movie-db.response';

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
}
