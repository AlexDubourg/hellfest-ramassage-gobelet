import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mode: any;
  name = 'Angular ';

  constructor() {
    // import only environment wherever you wanna use.
    this.mode = environment.mode; 
  }
}
