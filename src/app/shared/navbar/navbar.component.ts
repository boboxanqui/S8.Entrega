import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private sharedService: SharedService ) { }

  ngOnInit(): void {

    this.sharedService.showSignUp$.subscribe( resp => {
      this.displaySignup = resp
    })
    this.sharedService.showLogIn$.subscribe( resp => {
      this.displayLogIn = resp
    })
    
  }


  displaySignup: boolean = false;
  displayLogIn: boolean = false;

  get userLogged() {
    return this.sharedService.userLogged
  }

  showSignup() {
      this.sharedService.setShowSignUp(true);
  }

  closeSignup() {
    this.sharedService.setShowSignUp(false)
  }

  showLogIn() {
    this.sharedService.setshowLogIn(true)
  }

  closeLogIn() {
    this.sharedService.setshowLogIn(false)
  }

  logOut(){
    this.sharedService.logout();
  }

  




}
