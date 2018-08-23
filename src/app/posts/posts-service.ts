import { Post } from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

// Only one instance in whole app, not adding service in module.ts
@Injectable({ providedIn: 'root' })
export class PostsService {
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    getPosts() {
        // Deep copy, not just address
        return [...this.posts];
    }

    getPostUpdatedListener() {
      return this.postUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = { title: title, content: content };
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }
}
