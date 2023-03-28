import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { CheckRoleGuard } from './core/guards/check-role.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication-routing.module').then(
        (m) => m.AuthenticationRoutingModule
      ),
    canActivate: [GuestGuard],
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/client/client-routing.module').then(
        (m) => m.ClientRoutingModule
      ),
    canActivate: [AuthGuard, CheckRoleGuard],
    data: { expectedRole: ['ROLE_CLIENT'] },
  },

  {
    path: 'seller',
    loadChildren: () =>
      import('./pages/seller/seller-routing.module').then(
        (m) => m.SellerRoutingModule
      ),
    canActivate: [AuthGuard, CheckRoleGuard],
    data: { expectedRole: ['ROLE_SELLER'] },
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
    canActivate: [AuthGuard, CheckRoleGuard],
    data: { expectedRole: ['ROLE_ADMIN'] },
  },
  // other routes go here
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
