import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RollCallService {
  code: number;

  constructor() { }

  saveCode(code, classroom){
    this.code = code;
    // this.http.post('/api/...', code, classroom);
  }

  getCode(){
    return this.code;
  }
}
