/// <reference path="../../../typings/index.d.ts" />
import {AppModule} from '../app.module';

class Controller {
  public kaka: string = 'Kaka';
}

export const comp1 = AppModule
  .component('comp1', {
    template: `
      <div class="container">
        <h1>Component 1:<span class="green"><em>{{$ctrl.kaka}}</em></span></h1>
      </div>`,
    controller: Controller
  });

console.debug('Initialized comp1', comp1);


