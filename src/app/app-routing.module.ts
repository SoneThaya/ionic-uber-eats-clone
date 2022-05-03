import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./auth-screens/intro/intro.module').then(
        (m) => m.IntroPageModule
      ),
  },
  {
    path: 'auth-screens',
    loadChildren: () =>
      import('./auth-screens/auth-screens/auth-screens.module').then(
        (m) => m.AuthScreensPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
