import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from "../post";
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postList : Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
  	this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.postList = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  onSave() {
    this.postService.savePostsToServer();
  }

  onFetch() {
    this.postService.getPostsFromServer();
  }

}
