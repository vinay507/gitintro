import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { Service } from './test.service';
import { MergeComponent } from './merge/merge.component';

@NgModule({
  declarations: [
    AppComponent, Service, MergeComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
