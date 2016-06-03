import { Component, Type } from '@angular/core';
import '../../public/css/styles.css';
import {hello} from "common/hello";

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
}) 
export class AppComponent extends Type {
  xxx: string;
  constructor() {
    super();
    this.xxx = hello();
  }
}
