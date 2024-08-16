import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

import { Course } from '../models/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable } from 'rxjs';

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

  courses: Observable<Course[]>;

  displayedColumns = ['name', 'category']


  constructor(private coursesService: CoursesService ) {
    this.courses = this.coursesService.list();
  }
}
