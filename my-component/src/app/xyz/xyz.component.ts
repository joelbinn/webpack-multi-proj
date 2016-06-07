import { Component, Type } from '@angular/core';
import {hello} from "common/hello";

@Component({
  selector: 'my-xyz',
  template: require('./xyz.component.html'),
  styles: [require('./xyz.component.css')]
}) 
export class XyzComponent extends Type {
  xyz: string;
  constructor() {
    super();
    this.xyz = hello();
  }
}
