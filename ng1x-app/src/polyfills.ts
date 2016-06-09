import 'core-js/es6';
import 'reflect-metadata';
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
}
