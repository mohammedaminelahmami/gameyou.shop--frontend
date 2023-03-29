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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

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
    ShoppingCartComponent,
    FilterBarComponent,
  ],
  imports: [CommonModule, RouterModule],
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
    ShoppingCartComponent,
    FilterBarComponent,
  ],
})
export class ComponentsModule {}
