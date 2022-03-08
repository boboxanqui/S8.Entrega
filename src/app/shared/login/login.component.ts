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

    this.sharedService.showLogIn$.subscribe( resp => {
      if( !resp ){
        this.logInForm.reset()
        this.submited = false;
      }
    })
  }

  submited: boolean = false;
  emailPattern: string =  "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,}$";

  logInForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.pattern(this.emailPattern)] ],
    password: ['', Validators.required]
  })

  // Error Form text
  inputValidator( input: string ){
    return this.logInForm.get(input)?.invalid && this.submited
  }

  errorTextUser(): string{
    if(this.logInForm.controls['email'].errors?.['required']){
      return 'Required'
    } 
    if(this.logInForm.controls['email'].errors?.['pattern']) {
      return 'Please enter a valid email address.'
    }
    if(this.logInForm.controls['email'].errors?.['invalid']){
      return `This email address doesn't exist`
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
    this.submited = true
    if(this.logInForm.invalid){
      return
    }

    let validation = {
      user: false,
      password: false
    }
    if( localStorage.getItem('user') ){
      const user = JSON.parse( localStorage.getItem('user')! )

      if( user.email == this.logInForm.controls['email'].value ){
          validation.user = true
        } else {
          this.logInForm.controls['email'].setErrors({"invalid": "true"});
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
    } else{
      this.logInForm.controls['email'].setErrors({"invalid": "true"});
      this.logInForm.controls['password'].setErrors({"invalid": "true"});;
    }
  }

  // Open Sign up
  openSignUp() {
    this.sharedService.setshowLogIn(false);
    this.sharedService.setShowSignUp(true);
  }

}
