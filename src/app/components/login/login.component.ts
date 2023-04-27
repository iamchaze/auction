import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private service: GlobalService){}
  username:any
  password:any
  userData:any = []
  remember:boolean = false

  navigateToSignUp(){
    this.router.navigate(['/sign-up'])
  }
  login(){
    // console.log(this.username, this.password);

    this.service.getRecords("users").subscribe((res) =>{

      this.userData = res
      const matchingRecord = this.userData.filter(
        (record:any) => {
          return record.username == this.username && record.password == this.password
        }
      )
      // console.log(matchingRecord);
        if(matchingRecord.length > 0)
        // if(this.userData[0].uid == this.username && this.userData[0].upass == this.password)
        {
          this.service.login(this.username, this.remember)
          this.router.navigate(['/view-products'])
        } else {
          alert('Invalid Credentials')
          this.username = ""
          this.password = ""
        }
    })
  }
}

