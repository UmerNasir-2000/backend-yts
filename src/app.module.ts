import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
    MovieModule,
  ],
})
export class AppModule {}
