/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlyghtsService } from './flyghts.service';

describe('Service: Flyghts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyghtsService]
    });
  });

  it('should ...', inject([FlyghtsService], (service: FlyghtsService) => {
    expect(service).toBeTruthy();
  }));
});
