import * as angular from 'angular';
import './app/index';
import '../public/css/styles.css';

angular.bootstrap(document, ['app'], {
  strictDi: true
});