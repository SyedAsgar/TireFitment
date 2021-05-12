import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TireComponent } from 'src/app/components/tire/tire.component';


const routes: Routes = [
  {
    path: '', component: TireComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiresRoutingModule { }
