import { CheckoutComponent } from './../client/checkout/checkout.component';
import { ShoppingCartComponent } from './../client/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './../client/wishlist/wishlist.component';
import { ProfileComponent } from './../client/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../client/category/category.component';
import { HomeComponent } from '../client/home/home.component';
import { ProductComponent } from '../client/product/product.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './store/products/products.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { DashboardComponent } from './store/dashboard/dashboard.component';
import { StoreOrdersComponent } from './store/store-orders/store-orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  // seller
  {
    path: 'store',
    component: StoreComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addnewproduct', component: AddProductComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: StoreOrdersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
