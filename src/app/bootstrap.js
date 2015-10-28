//import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';
import { bootstrap, bind, FORM_BINDINGS } from 'angular2/angular2';
import { CalendarComponent } from 'app/components/calendar/calendar-component';

bootstrap(CalendarComponent, [
    FORM_BINDINGS
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);