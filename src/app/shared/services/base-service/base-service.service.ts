import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponseBase, HttpEvent } from '@angular/common/http';
import { HttpRequestOptions } from '../../interfaces/HttpRequestOptions';
import { ConfigService } from '../config/config.service';
import { Config } from '../../interfaces/configuration';
import { test } from '../../test';



export function applicationHttpClientCreator(http: HttpClient, config: ConfigService) {
  return new BaseServiceService(http, config);
}

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {

    this.getApiEndPoint();

  }

  private apiEndPoint = '';

  public get<T>(url: string, urlParams?: object): Observable<any> {
    const options = this.createNewRequestOptions(urlParams);
    const fullUrl = this.prependEndPoint(url);
    return this.http.get<T>(fullUrl, options);
  }


  public post<T>(url: string, postBody: Object, urlParams?: Object): Observable<any> {
    const apiUrl = this.prependEndPoint(url);
    const options = this.createNewRequestOptions(urlParams);
    return this.http.post<T>(apiUrl, postBody, options);
  }


  public put<T>(url: string, postBody: Object, urlParams?: Object): Observable<any> {
    const apiUrl = this.prependEndPoint(url);
    const options = this.createNewRequestOptions(urlParams);
    return this.http.put<T>(apiUrl, postBody, options);
  }

  public delete<T>(url: string, urlParams?: Object): Observable<any> {
    const apiUrl = this.prependEndPoint(url);
    const options = this.createNewRequestOptions(urlParams);
    return this.http.delete<T>(apiUrl, options);
  }

  public postFile<T>(url: string, urlParams?: object): Observable<any> {
    return this.http.post<T>(url, urlParams);
  }


  private createNewRequestOptions(urlParams?: object): any {
    const param = {};
    // tslint:disable-next-line:forin
    for (const p in urlParams) {
      param[p] = urlParams[p];
    }
    const params = new HttpParams({ fromObject: param });
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const httpOptions: HttpRequestOptions = { headers: header, params: params };
    return httpOptions;
  }

  private getApiEndPoint() {
    this.configService.getConfig().subscribe(config => {
      this.apiEndPoint = config.apiEndPoint;
      console.log(this.apiEndPoint);
    });

  }

  private prependEndPoint(url: string): string {
    const apiUrl = `${this.apiEndPoint}${url}`;
    return apiUrl;
  }



}
