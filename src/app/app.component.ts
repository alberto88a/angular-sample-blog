import { Component } from '@angular/core';
import { Post } from "./post";
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts : Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostsFromServer();
  }
}
