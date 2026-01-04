import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { posts } from './data/data';
import { CartdbService } from 'src/cartdb/cartdb.service';

@Injectable()
export class BlogsService {
  constructor(private readonly cartdbService: CartdbService) {}
  private readonly posts: Post[] = posts;
  getAllBlogs() {
    return this.posts;
  }
}
