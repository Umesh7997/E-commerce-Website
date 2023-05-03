import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash,faEdit} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  constructor(private product: ProductService) { }
  productList: undefined | product[]
  productMessage: undefined | string
deleteIcon=faTrash;
editIcon=faEdit;

  ngOnInit(): void {
   this.list();
  }
  deleteProduct(id: number) {
    console.warn("test id", id);

    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "product is deleted"
        this.list();
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined,3000
    })
  }
  list(){
    this.product.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result;
    })
  }
}
