import {AppModule} from "./app.module";
import * as R from 'ramda';
import * as _ from 'lodash';


class Controller {
  public danger:boolean = false;

  public toggle():void {
    console.log('toggle!');
    this.danger = !this.danger;
  }
}

class AppComponent implements ng.IComponentOptions {
  public template:string = `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#/">Angular 1.x Application with Webpack & Typescript</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#/comp1" title="Component1">Component 1</a></li>
                        <li><a href="#/comp2" title="Component2">Component 2</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div ng-view></div>
        <br><br><br><br>
        <div class="container">
          <button class="btn btn-success" ng-click="$ctrl.toggle()">Toggle</button>
          <i class="fa fa-space-shuttle margin-left-lg" ng-class="{red: $ctrl.danger, green: !$ctrl.danger}"  aria-hidden="true"></i>
        </div>
        <comp1></comp1>`;

  public controller:Function = Controller;
}


export const myApp = AppModule.component('myApp', new AppComponent());
_.each([1,2,3], e => console.log('element:',e));
// TODO fixa
R.forEach(e => console.log('element:',e), [11,22,33]);
console.debug('Initialized app.component', myApp);

