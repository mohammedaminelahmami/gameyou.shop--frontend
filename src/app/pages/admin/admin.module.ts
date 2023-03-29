import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [CommonModule, AdminRoutingModule, ComponentsModule],
})
export class AdminModule {}
