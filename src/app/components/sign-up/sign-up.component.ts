
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegEx, nameRegEx, numberRegEx, passwordRegEx, usernameRegEx } from 'src/app/shared/common data/constants';
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
  showPasswordFlag:any = "password"
  constructor(private router:Router, private service:GlobalService, private formBuilder: FormBuilder){}

  passwordMatchValidator(formgroup: FormGroup){
    const password = formgroup.get('password')?.value
    const cPassword = formgroup.get('cPassword')?.value

    if(password != cPassword){
      formgroup.get('cPassword')?.setErrors({mismatch:true})
    } else {
      formgroup.get('cPassword')?.setErrors(null)
    }
  }

  signUp(data:any){
    const dataObj = {
      "firstName":this.userData.get('fname').value,
      "lastName":this.userData.get('lname').value,
      "email":this.userData.get('email').value,
      "contact":this.userData.get('contact').value,
      "address":this.userData.get('address').value,
      "username":this.userData.get('username').value,
      "password":this.userData.get('password').value,
      "savedProductsIdList": []
    }
    console.log("fname",this.fname);
    this.service.addRecord("Users", dataObj).subscribe(
      () =>
      {
      alert("Account Created")
      },
      error => {
        alert('something wrong happened')
      }
    )
    this.router.navigate(['/login'])
  }

  ngOnInit() {

    this.userData = this.formBuilder.group(
      {
        fname: ['', [Validators.required, Validators.pattern(nameRegEx)]],
        lname: ['', [Validators.required, Validators.pattern(nameRegEx)]],
        email: ['', [Validators.required, Validators.pattern(emailRegEx)]],
        contact: ['', [Validators.required, Validators.pattern(numberRegEx)]],
        address: ['', [Validators.required]],
        photo: ['', ],
        username: ['', [Validators.required, Validators.pattern(usernameRegEx)]],
        password: ['', [Validators.required, Validators.pattern(passwordRegEx)]],
        cPassword: ['', [Validators.required  ]]
      }, {
        validator: this.passwordMatchValidator
      }
    )
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

  showPassword(){
    if(this.showPasswordFlag == "password"){
      this.showPasswordFlag = "text"
    } else {
      this.showPasswordFlag = "password"
    }
  }

}
