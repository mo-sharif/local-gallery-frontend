import { Component, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DataService } from './data.service';
import './rxjs-operators';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

const URL = 'http://localhost:3000/upload';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public uploader: FileUploader = new FileUploader({ url: URL });
  images;
  public dataService: DataService;
  constructor(private http: Http, private _dataService: DataService) {
    // this.images = [
    //   { "url": "http://localhost:3000/readImage/file-1537660962308.jpg" },
    //   { "url": "http://localhost:3000/readImage/file-1537660962308.jpg" },
    //   { "url": "http://localhost:3000/readImage/file-1537660962308.jpg" },
    //   { "url": "http://localhost:3000/readImage/file-1537660962308.jpg" },
    //   { "url": "http://localhost:3000/readImage/file-1537660962308.jpg" },
    //   { "url": "http://localhost:3000/readImage/file-1537660962308.jpg" },
    // ];
  }

  ngOnInit() {
    this.getImageData();
  }
  getImageData() {
    
    this._dataService.getImageData().then(
      data=> {
          console.log(data)
          this.images = data.imageUrlArrayResult;
        }
    );

  }

  getImages() {

  }
}
