import { Injectable } from '@angular/core';
import { Post } from "../post";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  postSubject = new Subject<Post[]>();

  private posts : Post[] = [
    /**{
  	  id: 0,
      title: 'Mon premier post',
      content: 'Mon premier content, mon premier content, mon premier content',
      loveIts: 0
    },
    {  
      id: 1,
      title: 'Mon deuxième post',
      content: 'Mon deuxième content, mon deuxième content, mon deuxième content',
      loveIts: 0
    },
    {
      id: 2,
      title: 'Encore un post',
      content: 'Encore un content, encore un content, encore un content',
      loveIts: 0
    }*/
  ];

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  getPostById(id: number) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    return post;
  }

  addLike(id: number) {
    this.getPostById(id).loveIts = this.getPostById(id).loveIts + 1;
    this.emitPostSubject();
  }

  removeLike(id: number) {
    this.getPostById(id).loveIts = this.getPostById(id).loveIts - 1;
    this.emitPostSubject();
  }

  savePostsToServer() {
    this.httpClient
      .put('https://http-client-demo-1123d.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-1123d.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  addPost(title: string, content: string) {
      const postObject = {
        id: 0,
        title: '',
        content: '',
        loveIts: 0
      };
      postObject.title = title;
      postObject.content = content;
      postObject.id = this.posts[(this.posts.length - 1)].id + 1;
      this.posts.push(postObject);
      this.savePostsToServer();
      this.emitPostSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePostsToServer();
    this.emitPostSubject();
  }

}
