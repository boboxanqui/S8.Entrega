import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, switchMap, tap } from 'rxjs';

import { Giphy, Pilot, Starship, StarshipPage } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private swapiUrl: string = 'https://swapi.dev/api/';
  private swapiPy4eUrl: string = 'https://swapi.py4e.com/api/';
  private imagesUrl: string = 'https://starwars-visualguide.com/';
  private giphyKey: string = '0epac1rkHmkdvQRYB7lfuIBOZvxYvwjz';
  private giphyUrl: string ='https://api.giphy.com/v1/gifs/search';
  

  getStarshipsList(): Observable<StarshipPage> {
    const url = `${this.swapiUrl}starships`
    return this.http.get<StarshipPage>(url)
  }

  starshipByName( name: string ): Observable<Starship> {
    const starshipName = name.replace('%20', ' ');
    return this.getStarshipsList().pipe(
      switchMap( resp => resp.results.filter(starship => starship.name == starshipName) ),
    )
  }

  starshipImg( id: string ): Observable<string> {
    const url = `${this.imagesUrl}assets/img/starships/${id}.jpg`
    return this.http.get<string>(url)
  }

  getNextStarshipPage( page: StarshipPage ): Observable<StarshipPage>{
    return this.http.get<StarshipPage>(page.next)
  }

  getPilotByUrl(url: string): Observable<Pilot>{
    return this.http.get<Pilot>(url)
  }

  getGifs(): Observable<Giphy>{
    const params = new HttpParams()
    .set('api_key', this.giphyKey)
    .set('q','star wars')
    .set('limit','20')
    return this.http.get<Giphy>( this.giphyUrl, {params} )
  }


}
