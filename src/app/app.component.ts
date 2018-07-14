import { Component } from '@angular/core';
import { TestService } from './shared/services/test/test.service';
import { BaseServiceService } from './shared/services/base-service/base-service.service';
import { test as t } from './shared/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private test: TestService

  ) {

  }
  listPost() {
    this.test.getTest().subscribe(tests => {
      console.log(tests);
    });
  }

  post() {
    this.test.getTestPost().subscribe(tests => {
      console.log(tests);
    });
  }
  // aa(p: any) {
  //   alert(JSON.stringify(p));
  // }
}
