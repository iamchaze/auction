import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-saved-products',
  templateUrl: './saved-products.component.html',
  styleUrls: ['./saved-products.component.css']
})
export class SavedProductsComponent implements OnInit {

constructor(private service: GlobalService, private router:Router){}

  allProducts:any
  savedProducts:any
  ngOnInit(): void {
    this.service.getRecords("Products").subscribe((result) =>
      {
        this.allProducts = result
          // console.log(this.allProducts[0].savedProduct);
        this.savedProducts = this.allProducts.filter((product:any) =>{
          return product.savedProduct
        })
        // console.log(this.savedProducts);

      })


  }
  setPath(id:any){
    this.router.navigate(['bid-products',id])
  }

}
