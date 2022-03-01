import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor ( private sharedService: SharedService ) {}

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if ( this.sharedService.userLogged ){
        return true;
      }
    console.log('Bloqueado por AutGuard - CanActivate');
    
    
    //FIXME: change to 'false' to block any not registered user
    
    // this.sharedService.setshowLogIn(true);
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if ( this.sharedService.userLogged ){
        return true;
      }
    console.log('Bloqueado por AutGuard - CanLoad');
    
    return false;
  }
}
