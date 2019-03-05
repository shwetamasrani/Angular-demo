import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TasksModule } from 'tasks';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
