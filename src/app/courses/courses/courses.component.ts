import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../models/course';
import { CoursesService } from './../services/courses.service';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AppMaterialModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];


  constructor(private coursesService: CoursesService ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
    );
  }
}
