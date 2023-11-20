import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schema/movie.schema';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
