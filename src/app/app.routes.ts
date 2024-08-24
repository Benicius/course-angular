import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'flyghts',
    loadChildren: () => import('./flyghts/flyghts.module').then(m => m.FlyghtsModule)
  }
];
