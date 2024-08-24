import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flyght } from '../models/flyght';
import { first, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlyghtsService {

constructor(private httClient: HttpClient) { }

  private readonly API = 'api/v1/flight';
  findAll() {
    return this.httClient.get<Flyght[]>(this.API)
    .pipe(
      first(),
      tap(flyght => console.log(flyght))

    );
  }

}
