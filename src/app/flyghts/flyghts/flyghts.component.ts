import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flyght } from '../models/flyght';
import { FlyghtsService } from '../services/flyghts.service';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-flyghts',
  standalone: true,
  imports: [
    AppMaterialModule
  ],
  templateUrl: './flyghts.component.html',
  styleUrl: './flyghts.component.scss'
})
export class FlyghtsComponent {

  flyghts$: Observable<Flyght[]>;

  displayedColumns = [
    'passengerName',
    'flightReference',
    'flightDate',
    'flightTime',
    'flightType',
    'bagType'
  ];

  constructor(private flyghtService: FlyghtsService) {
    this.flyghts$ = this.flyghtService.findAll();
  }
}
