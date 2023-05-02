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
  let sellerData=sellerStore&&JSON.parse(sellerStore)[0];
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
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
}
}
