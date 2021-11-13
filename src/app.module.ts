import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { User } from './users/user.entity';
import { UserService } from './users/user.service';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/entities/post.entity';
import {PostsController} from "./posts/posts.controller";
import {PostsService} from "./posts/posts.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_app_test',
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([User, Post]),
  ],
  controllers: [UserController, PostsController],
  providers: [UserService, PostsService],
})
export class AppModule {}
