import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FlyghtsRoutingModule } from './flyghts-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlyghtsRoutingModule,
    AppMaterialModule
  ]
})
export class FlyghtsModule { }
