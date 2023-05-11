import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listMovie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://638492184ce192ac605bc39a.mockapi.io/Movie';

  constructor(private http: HttpClient) { }

  getDatabyId(id: string): Observable<listMovie> {
    return this.http.get<listMovie>(`${this.apiUrl}/${id}`);
  }
}