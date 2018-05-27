import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
  
  </div>
  `
})

export class AppComponent implements OnInit {
  public person = 'chris'
  
  constructor() { }

  ngOnInit() { }
}
