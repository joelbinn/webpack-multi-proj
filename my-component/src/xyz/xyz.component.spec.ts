import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { XyzComponent } from './xyz.component';
describe('Xyz', () => {
  beforeEachProviders(() => [
    XyzComponent
  ]);
  it ('should work', inject([XyzComponent], (xyz: XyzComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
