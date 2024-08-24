import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlyghtsComponent } from './flyghts/flyghts.component';

const routes: Routes = [
  { path: '', component: FlyghtsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlyghtsRoutingModule { }
