import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {

  constructor(private router:Router){}
  products:any = [
    {
      productId: "1",
      productName: "car",
      productDescription: "this is a car",
      productImage: "../../../assets/images/car1.jpg"
    },
    {
      productId: "2",
      productName: "car",
      productDescription: "this is a car",
      productImage: "../../../assets/images/car2.jpg"
    },
  ]

  setPath(id:any){
    this.router.navigate(['view-products',id])
  }
}
