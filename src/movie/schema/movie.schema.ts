import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop({ name: 'medium_cover_image' })
  poster: string;

  @Prop()
  rating: number;

  @Prop()
  runtime: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
