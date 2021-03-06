import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthScreensPageRoutingModule } from './auth-screens-routing.module';

import { AuthScreensPage } from './auth-screens.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthScreensPageRoutingModule,
  ],
  declarations: [AuthScreensPage],
})
export class AuthScreensPageModule {}
