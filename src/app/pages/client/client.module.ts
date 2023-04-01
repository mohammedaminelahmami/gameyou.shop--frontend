import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    CategoryComponent,
    ShoppingCartComponent,
    ProductComponent,
    CheckoutComponent,
    WishlistComponent,
    OrdersComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, ComponentsModule],
})
export class ClientModule {}
