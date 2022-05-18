import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http : HttpClient) { }

  getTrending():Observable<any>
  {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/week?api_key=85298515888feea7c13503b2ed33d4a5')
  }


  getTrendingfilm():Observable<any>
  {
    return this.http.get('https://api.themoviedb.org/3/trending/tv/week?api_key=85298515888feea7c13503b2ed33d4a5')
  }



  getMoviesDetails(id: any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=85298515888feea7c13503b2ed33d4a5&language=en-US`)
  }


  gettvDetails(id: any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=85298515888feea7c13503b2ed33d4a5&language=en-US`)
  }



}
