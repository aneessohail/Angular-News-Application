import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

  topheadlinesapi='https://newsapi.org/v2/top-headlines?country=in&apiKey=03937229c17d4f9b84b5c3bacb7606bc';

  entertainment='https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=03937229c17d4f9b84b5c3bacb7606bc';

  tech='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=03937229c17d4f9b84b5c3bacb7606bc'

headlines():Observable<any>{
  return this.http.get(this.topheadlinesapi)
}
ent():Observable<any>{
  return this.http.get(this.entertainment)
}
technology():Observable<any>{
  return this.http.get(this.tech)
}

}
