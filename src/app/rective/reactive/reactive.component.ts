import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  constructor() {}
  signupForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.signupForm.patchValue({
      fname: 'name',
      lname: 'last n',
    });
    this.signupForm.setValue({
      fname: 'sfds',
      lname: 'sfds',
      email: 'sfds',
      phone: '12345',
      pass: 'sfds',
    });
  }
  validArr: string[] = [];
  validMeth(obj: any) {
    this.validArr = [];
    for (const name in obj) {
      if (obj[name].invalid) {
        this.validArr.push(name);
      }
    }
    console.log(this.validArr);
  }
  emailError = false;
  formsubmit() {
    if (this.signupForm.status === 'VALID') {
      console.log(this.signupForm);
    } else {
      this.validMeth(this.signupForm.controls);
    }
    // if (this.signupForm.controls.email.invalid) {
    //   this.emailError = true;
    // } else {
    //   this.emailError = false;
    // }
  }
}
