import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';
import { GalleryComponent } from './gallery/gallery.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
