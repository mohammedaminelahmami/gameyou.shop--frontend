import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ProfileComponent, HomeComponent],
  imports: [CommonModule, ClientRoutingModule, ComponentsModule],
})
export class ClientModule {}
