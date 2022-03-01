import { Injectable } from '@angular/core';
import { Starship } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _starshipArr: Starship[] = []

  // GETTERS
  get starshipArr () {
    return this._starshipArr;
  }

  // SETTERS
  addStarship( list: Starship[]){
    this._starshipArr.push(...list)
  }

  // METHODS
  getId(url: string): string {
    let urlArr = url.split('/');
    return urlArr[urlArr.length - 2]
  }

}
