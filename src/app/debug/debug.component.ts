import { Component } from '@angular/core';
import { interval, of } from 'rxjs';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent {
  intervalObservable = interval(1000);

  constructor() { }

  onInit() {
    console.log('bugs runnin wild');
    this.empty();
    this.interval();
  }

  empty() {
    (of('test')).subscribe();
    console.log('test empty');
  }

  interval() {
    // intervalObservable.subscribe(( {
    //   console.log('time is an illusion');
    // });
  }

  timesUp() {
    console.log('time\'s up');
  }
}
