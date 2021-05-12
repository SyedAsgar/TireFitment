import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tires',
    pathMatch: 'full',
  },
  {
    path: 'tires',
    loadChildren: () =>
      import('./modules/tires/tires.module').then(
        (m) => m.TiresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
