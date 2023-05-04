import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)           //error message 
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    // return this.http.post('http://localhost:3000/seller',data)

    this.http.post(`http://localhost:3000/seller`, data,
      { observe: "response" }
    ).subscribe((result) => {
      this.isSellerLoggedIn.next(true);

// local storage code
//The setItem(key, value) method helps us add value to the local storage using a key and value.

      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
      
    });
  }
  reloadSeller(){
//The getItem(key) method helps us read and expects the key name to return the data in local storage.
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-auth'])
    }
  }

  userLogin(data:login){
    console.warn(data)
//login code
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,   // Query params
    {observe:'response'}
    ).subscribe((result:any)=>{
      console.warn(result)
      if(result && result.body && result.body.length){
        // object data
        console.warn("user logged in")


  //localstorage code--------stores user details in local browser

  // convert to Json data 
                  //  setItem (key   ,    value)
        localStorage.setItem('seller', JSON.stringify(result.body))   //JSON.stringify(), which is used to convert the object data into the JSON format.
      this.router.navigate(['seller-home'])
      }
      else{
        console.warn("user login failed")
        this.isLoginError.emit(true)                      //error message
      }
    })
  }
}

// JSON.stringify() , which is used to convert object data to JSON format data.
// JSON.Parse() , which is used convert Json format data to Object data.