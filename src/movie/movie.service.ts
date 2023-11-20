import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schema/movie.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ) {}

  findAll(): Promise<Movie[]> {
    return this.movieModel
      .find()
      .select({
        _id: 1,
        title: 1,
        slug: 1,
        medium_cover_image: 1,
        rating: 1,
        runtime: 1,
      })
      .limit(50);
  }
}
