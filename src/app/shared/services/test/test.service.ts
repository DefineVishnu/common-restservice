import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base-service/base-service.service';
import { test } from '../../test';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private baseService: BaseServiceService,
    private http: HttpClient

  ) { }


  getTest() {

    return this.baseService.get<any>('api/user');


  }


  getTestPost() {
    const u: TestUser = new TestUser();
    u.UserId = 1;
    u.UserName = 'name';
    return this.baseService.post<Response>('api/user/post', u);


  }
}

class TestParams {
  id: number;
  name: string;



}

class TestUser {
  UserId: number;
  UserName: string;
}


class Response {
  status: string;
  message: string;
}
