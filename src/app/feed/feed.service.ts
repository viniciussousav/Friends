import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  url: string = 'https://vinicius-friends.herokuapp.com/publications';


  constructor(private http: HttpClient) { }

  getPublications() {
    return this.http.get(this.url);
  }

  postPublication(author: String, content: String) {

    var publication = {
      author: author,
      content: content
    };

    return this.http.post<any>(this.url, JSON.stringify(publication), { headers: this.headers });
  }

  postComment(author: String, content: String, id: String) {
    var comment = {
      author: author,
      content: content
    }

    return this.http.put<any>(this.url + '/' + id, comment, {headers: this.headers})
  }

  deletePublication(id: String){
    return this.http.delete<any>(this.url + '/' + id, {headers: this.headers});
  }
}
