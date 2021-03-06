import { Post } from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Only one instance in whole app, not adding service in module.ts
@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {

  }

  getPosts() {
    this.httpClient.get<{ message: 'string', posts: Post[] }>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
          this.posts = postData.posts;
          this.postUpdated.next([...this.posts]);
      });
    // Deep copy, not just address
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
