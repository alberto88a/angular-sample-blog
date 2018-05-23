import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts: number;
  created_at: Date;

  constructor() { 
  	this.created_at = new Date()
  	this.loveIts = 0
  }

  ngOnInit() {
  }

  addLike() {
  	this.loveIts = this.loveIts + 1; 
  }

  removeLike() {
  	this.loveIts = this.loveIts - 1; 
  }

}
