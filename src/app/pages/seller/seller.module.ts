import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './store/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    StoreComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class SellerModule {}
