import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greetings = 'app';

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.sayHello().subscribe(result => {
      this.greetings = result;
    });
  }
}
