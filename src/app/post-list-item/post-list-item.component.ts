import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from "../post";


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  created_at: Date;
  
  constructor(private postService: PostService) { 
  	this.created_at = new Date()
  	this.loveIts = 0
  }

  ngOnInit() {
  }

  onLike() {
    this.loveIts = this.loveIts + 1;
  	this.postService.addLike(this.id);
  }

  onUnlike() {
  	this.loveIts = this.loveIts - 1;
    this.postService.removeLike(this.id);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

}
