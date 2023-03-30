import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CategoriesBarComponent } from './categories-bar/categories-bar.component';
import { ExploreCategoriesComponent } from './explore-categories/explore-categories.component';
import { TopDealsComponentComponent } from './top-deals-component/top-deals-component.component';
import { FreeDeliveryProductsComponentComponent } from './free-delivery-products-component/free-delivery-products-component.component';
import { GamyouAdComponent } from './gamyou-ad/gamyou-ad.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchComponent,
    SidebarComponent,
    LogoComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesBarComponent,
    ExploreCategoriesComponent,
    TopDealsComponentComponent,
    FreeDeliveryProductsComponentComponent,
    GamyouAdComponent,
    FilterBarComponent,
    ProductComponentComponent,
    DashboardNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PaginationComponent,
    SearchComponent,
    SidebarComponent,
    LogoComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesBarComponent,
    ExploreCategoriesComponent,
    TopDealsComponentComponent,
    FreeDeliveryProductsComponentComponent,
    GamyouAdComponent,
    FilterBarComponent,
    ProductComponentComponent,
    DashboardNavbarComponent,
  ],
})
export class ComponentsModule {}
