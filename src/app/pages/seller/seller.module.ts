import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './store/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './store/add-product/add-product.component';
import { DashboardComponent } from './store/dashboard/dashboard.component';
import { StoreOrdersComponent } from './store/store-orders/store-orders.component';

@NgModule({
  declarations: [
    ProfileComponent,
    StoreComponent,
    ProductsComponent,
    AddProductComponent,
    DashboardComponent,
    StoreOrdersComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class SellerModule {}
