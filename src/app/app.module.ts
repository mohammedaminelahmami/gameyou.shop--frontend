import { RouterModule } from '@angular/router';
import { SellerModule } from './pages/seller/seller.module';
import { AdminModule } from './pages/admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SharedModule } from './shared/shared.module';
import { ClientModule } from './pages/client/client.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, SearchComponent, PaginationComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    AuthenticationModule,
    SharedModule,
    AdminModule,
    SellerModule,
    ClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
