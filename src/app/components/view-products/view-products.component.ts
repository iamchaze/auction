import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private router:Router, private service:GlobalService){}
  categories = ["All","Cars", "Bikes"]
  selectedCategory:any
  productsObj:any


    display(){

    }
  setPath(id:any){
    this.router.navigate(['bid-products',id])
  }
  saveProduct(product:any){
    console.log(product.productName);
    const tempProduct = {
      "id": product.id,
      "productName": product.productName,
      "productCategory": product.productCategory,
      "productDescription": product.productDescription,
      "productImage": product.productImage,
      "productPrice": product.productPrice,
      "savedProduct": true
    }
    console.log("temp product",tempProduct);
    this.service.editRecord("Products", tempProduct, product.id).subscribe((result) =>{
      alert("Product Saved")
    })
  }
  ngOnInit() {
      this.service.getRecords("Products").subscribe((result) =>{
      this.productsObj = result
    })
  }
}
