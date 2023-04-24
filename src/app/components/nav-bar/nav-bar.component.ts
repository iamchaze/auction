import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router){}

  goToViewProducts(){
    this.router.navigate(['/view-products'])
  }
  goToSavedProducts(){
    this.router.navigate(['/saved-products'])
  }
  goToProfile(){
    this.router.navigate(['/profile'])
  }
  goToHome(){
    this.router.navigate(['/home'])
  }
}
