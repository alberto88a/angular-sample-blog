import { Component } from '@angular/core';
import { Post } from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my blog';

  posts : Post[] = [{
      title: 'Mon premier post',
      content: 'Mon premier content, mon premier content, mon premier content',
    },
    {
      title: 'Mon deuxième post',
      content: 'Mon deuxième content, mon deuxième content, mon deuxième content',
    },
    {
      title: 'Encore un post',
      content: 'Encore un content, encore un content, encore un content',
    }
  ];
}
