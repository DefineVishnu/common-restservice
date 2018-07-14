import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseServiceService, applicationHttpClientCreator } from './shared/services/base-service/base-service.service';
import { ConfigService } from './shared/services/config/config.service';
import { TestService } from './shared/services/test/test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: BaseServiceService,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient, ConfigService]
    },
    ,
    ConfigService,
    TestService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
