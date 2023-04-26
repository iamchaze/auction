import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegEx, nameRegEx, numberRegEx } from 'src/app/shared/common data/constants';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fname:any
  lname:any
  email:any
  contact:any
  address:any
  username:any
  password:any
  cPassword:any
  userData:any

  constructor(private router:Router, private service:GlobalService, private formBuilder: FormBuilder){}


  ngOnInit() {
    this.userData = this.formBuilder.group(
      {
        fname: ['', Validators.required, Validators.pattern(nameRegEx)],
        lname: ['', Validators.required, Validators.pattern(nameRegEx)],
        email: ['', Validators.required, Validators.pattern(emailRegEx)],
        contact: ['', Validators.required, Validators.pattern(numberRegEx)],
        address: ['', Validators.required],
        username: ['', Validators.required, Validators.pattern],
      }
    )
  }

  signUp(){
    // const userData = {
    //   "firstName":this.fname?.trim(),
    //   "lastName":this.lname?.trim(),
    //   "email":this.email?.trim(),
    //   "contact":this.contact?.trim(),
    //   "address":this.address?.trim(),
    //   "username":this.username?.trim(),
    //   "password":this.password?.trim(),
    //   "confirmPassword":this.cPassword?.trim()
    // }
    // console.log(userData);
    // this.service.addRecord("Users", userData).subscribe(
    //   () =>{
    //     alert("record added")
    //   },
    //   error => {
    //     alert("something went wroing")
    //   }

    // )
    // this.router.navigate(['/login'])
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}
