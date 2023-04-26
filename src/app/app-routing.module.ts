import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'seller-auth',component:SellerAuthComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'seller-home',component:SellerHomeComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
