import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private router: Router ) { }

  private _showSignUp = new Subject<boolean>()
  private _showLogIn = new Subject<boolean>()
  private _userLogged: string | undefined = undefined;

  get showSignUp$(): Observable<boolean> {
    return this._showSignUp
  }

  get showLogIn$(): Observable<boolean> {
    return this._showLogIn
  }

  get userLogged(): string | undefined {
    return this._userLogged
  }

  setShowSignUp( value: boolean ){
    this._showSignUp.next(value)
  }

  setshowLogIn( value: boolean ){
    this._showLogIn.next(value)
  }

  setUserLogged(username: string){
    this._userLogged = username;
  }

  // Methods

  logout(){
    this._userLogged = undefined;
    this.router.navigate(['/welcome']);
  }
}
