import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  constructor(private product: ProductService) { }
  productList: undefined | product[]

  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result;
    })
  }
}
