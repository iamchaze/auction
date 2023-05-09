import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


    ngOnInit() {

    }

    isLoggedIn(){
      if(sessionStorage.length > 0 || localStorage.length > 0){
        return true
      } else {
        return false
      }
    }
}
