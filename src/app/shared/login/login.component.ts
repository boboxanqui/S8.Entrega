import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

interface User {
  email:         string;
  firstName:     string;
  lastName:      string;
  notifications: null | string;
  password:      string;
  userName:      string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.submited = false;
  }

  submited: boolean = false;

  logInForm: FormGroup = this.fb.group({
    user: ['', [ Validators.required] ],
    password: ['', Validators.required]
  })

  // Error Form text
  inputValidator( input: string ){
    return this.logInForm.get(input)?.invalid && this.submited
  }

  errorTextUser(): string{
    if(this.logInForm.controls['user'].errors?.['required']){
      return 'Required'
    } 
    if(this.logInForm.controls['user'].errors?.['invalid']){
      return 'Username or Email Address invalid'
    } 
    return ''
  }

  errorTextPassword(): string{
    if(this.logInForm.controls['password'].errors?.['required']){
      return 'Required'
    } 
    if(this.logInForm.controls['password'].errors?.['invalid']){
      return 'Password invalid'
    } 
    return ''
  }

  // Submit Form

  onSubmit(){
    if(this.logInForm.invalid){
      this.submited = true;
      return
    }

    let validation = {
      user: false,
      password: false
    }
    if( localStorage.getItem('user') ){
      const user = JSON.parse( localStorage.getItem('user')!)

      if( user.userName == this.logInForm.controls['user'].value || 
        user.email == this.logInForm.controls['user'].value ){
          validation.user = true
        } else {
          this.logInForm.controls['user'].setErrors({"invalid": "true"});
        }
      if( user.password == this.logInForm.controls['password'].value ){
        validation.password = true
      } else {
        this.logInForm.controls['password'].setErrors({"invalid": "true"});;
      }
      if( validation.password && validation.user ){
        console.log('User Logged in!');
        this.sharedService.setUserLogged(user.userName)
        this.sharedService.setshowLogIn(false);
        this.logInForm.reset();
      }
    }
  }

  // Open Sign up
  openSignUp() {
    this.sharedService.setshowLogIn(false);
    this.sharedService.setShowSignUp(true);
  }

}
