/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterClassService } from './characterClass.service';

describe('Service: CharacterClass', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterClassService]
    });
  });

  it('should ...', inject([CharacterClassService], (service: CharacterClassService) => {
    expect(service).toBeTruthy();
  }));
});
