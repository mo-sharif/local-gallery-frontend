import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  public getImageData() {
    return this.http.get('http://localhost:3000/getImageUrls').toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);

  }


  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
