import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/', {
      dbName: 'DDD'
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }