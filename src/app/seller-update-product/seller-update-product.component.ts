import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product
  productMessage: undefined | string
  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {

  // Here ID is the token
  //This param is an array to which I can index using the id as the value
  // snapshot - if we want navigate to another component then we use it
  // paramMap - if we want navigate in same component then we use it
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.warn(data);
      this.productData = data;
    })
  }
  submit(data: product) {
console.warn(data)
if(this.productData){
  data.id=this.productData.id;
}
this.product.updateProduct(data).subscribe((result)=>{
if(result){
  this.productMessage="Product has updated";
}
})
setTimeout(()=>{
  this,this.productMessage=undefined
},3000)
  }
}
