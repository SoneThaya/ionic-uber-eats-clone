import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthScreensPage } from './auth-screens.page';

const routes: Routes = [
  {
    path: '',
    component: AuthScreensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthScreensPageRoutingModule {}
