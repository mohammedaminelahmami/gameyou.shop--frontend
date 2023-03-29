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
  ],
  imports: [CommonModule],
  exports: [
    PaginationComponent,
    SearchComponent,
    SidebarComponent,
    LogoComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesBarComponent,
    ExploreCategoriesComponent,
  ],
})
export class ComponentsModule {}
