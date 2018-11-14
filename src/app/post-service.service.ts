import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }





  getUserPosts(idUtente){
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" + idUtente);
  }

  getCommentiPost(idPost){
    return this.http.get("https://jsonplaceholder.typicode.com/comments?postId=" + idPost);
  }



}