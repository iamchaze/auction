import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  constructor(private router: Router, private service: GlobalService) {}
  categories: any = ['All'];
  selectedCategory: any;
  productsObj: any;
  category: any;
  tempObj:any
  ngOnInit() {
    this.service.getRecords('Products').subscribe((result) => {
      this.productsObj = result;

      //Get the list of categories from JSON
      for (let i = 0; i < this.productsObj.length; i++) {
        this.categories.push(this.productsObj[i].productCategory);
      }
      this.categories = Array.from(new Set(this.categories));
      // console.log(this.categories);
    });
  }

  categorize(category:any) {
    if(category == "All"){
      this.service.getRecords('Products').subscribe((result) => {
        this.productsObj = result
      })
    } else {
      this.service.getRecords('Products').subscribe((result) => {
        this.tempObj = result

        this.productsObj = this.tempObj.filter((product:any) => {
          return product.productCategory == category
        })
      })
    }
  }
  setPath(id: any) {
    this.router.navigate(['bid-products', id]);
  }
  saveProduct(id: any) {
    const tempObj = this.productsObj.filter((product: any) => {
      return product.id === id;
    });
    tempObj[0].savedProduct = true;
    // console.log(tempObj);

    this.service.editRecord('Products', tempObj[0], id).subscribe((result) => {
      alert('Product Saved');
    });
  }
}
