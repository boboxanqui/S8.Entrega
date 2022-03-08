import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {

  constructor( 
    private fb: FormBuilder,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

    this.sharedService.showSignUp$.subscribe( resp => {
      if( !resp ) {
        this.signUpForm.reset();
      }
    })

  }

  emailPattern: string =  "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,}$";
  // passwordPattern: string = "[a-zA-Z]+(\d|\s|(!|@|#|\$|%|\^|&|\*))+";
  passwordPattern2: string = "([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)";
  showPasswordInfo: boolean = false;
  
  signUpForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern2)]],
    notifications: [false]
  })

  // Error messages

  inputValidator(input: string) {
    return this.signUpForm.get(input)?.invalid &&
      this.signUpForm.get(input)?.touched
  }

  errorTextEmail(): string {
    if(this.signUpForm.controls['email'].errors?.['required']) {
      return 'Please enter your email address.'
    }
    else if(this.signUpForm.controls['email'].errors?.['pattern']) {
      return 'Please enter a valid email address.'
    }
    return ''
  }

  errorTextPassword(): string {
    if(this.signUpForm.controls['password'].errors?.['required']){
      return 'Please enter a password.'
    }
    else if(this.signUpForm.controls['password'].errors?.['minlength']){
      return 'The password is too short.'
    }
    else if(this.signUpForm.controls['password'].errors?.['pattern']){
      return 'Invalid password format.'
    }
    return '';
  }

  // Password Modal

  progressPasswor(): number{
    if(!this.signUpForm.controls['password'].value){
      return 0
    }
    let value = 0
    switch (this.signUpForm.controls['password'].value.length) {
      case 0: value = 0; break;
      case 1: value = 15; break;
      case 2: value = 30; break;
      case 3: value = 45; break;
      case 4: value = 60; break;
      case 5: value = 80; break;
      default: value = 90; break;
        break;
    }
    if(this.signUpForm.controls['password'].valid){
      value += 20   
    }    
    return value;
  }

  passwordLengthValidator(): boolean{
    if(!this.signUpForm.controls['password'].value){
      return true
    }
      return this.signUpForm.controls['password'].value?.length < 6 ? true : false;    
  }

  passwordPatternValidator(): boolean{
    if(!this.signUpForm.controls['password'].value){
      return true
    }
    return this.signUpForm.controls['password'].value?.match(this.passwordPattern2) ? false : true;
  }

  // Form Submit

  onSubmit(){
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      return;
    }
    localStorage.setItem('user', JSON.stringify(this.signUpForm.value) )
    console.log('NEW USER: ' + JSON.stringify(this.signUpForm.value) );
    this.signUpForm.reset();
    this.sharedService.setShowSignUp(false);
  }

  // Open Log in

  openLogIn(){
    this.sharedService.setShowSignUp(false);
    this.sharedService.setshowLogIn(true)
  }

}