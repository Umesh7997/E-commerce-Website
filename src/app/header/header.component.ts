import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType:string='default'
  sellerName:string=''                                                            //Username display

  constructor(private route:Router){}

  ngOnInit():void{
this.route.events.subscribe((val:any)=>{                                       // URL based code
if(val.url){
  console.warn(val.url)
  if(localStorage.getItem('seller') && val.url.includes('seller')){
console.warn("in seller area")
this.menuType="seller"

                                                                                // Username display

if(localStorage.getItem('seller')){
  let sellerStore=localStorage.getItem('seller');
  let sellerData=sellerStore&&JSON.parse(sellerStore)[0];   // convert object data to json format data
  this.sellerName=sellerData.name;
}
  }else{
    console.warn("outside seller area")
    this.menuType="default"
  }
} 
});
}
                                                               // Logout functionality
logout(){
//The removeItem(key) method helps us remove the key and the value; it expects the key name to remove it from the browser’s local storage.
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
}
}
