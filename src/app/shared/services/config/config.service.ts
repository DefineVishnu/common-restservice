import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '../../interfaces/configuration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:no-inferrable-types
  configUrl: string = 'assets/config.json';

  public getConfig(): Observable<Config> {
    return this.http.get<Config>(this.configUrl );
  }

}
