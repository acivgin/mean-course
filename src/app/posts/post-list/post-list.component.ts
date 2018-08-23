import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts-service';
import { Subscription } from 'rxjs'; // used for avoid memory leak,
 // once this component isn't part of the DOM this subscribe should be detach

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  private postsSubscription: Subscription;
  posts: Post[] = [];
  ngOnDestroy(): void {
   this.postsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSubscription = this.postsService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  constructor(public postsService: PostsService) {  }
}
