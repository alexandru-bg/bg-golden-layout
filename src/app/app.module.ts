import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GoldenLayoutModule, GoldenLayoutConfiguration } from '@embedded-enterprises/ng6-golden-layout';

import { TestComponent } from './test.component';

import * as $ from 'jquery';

const config: GoldenLayoutConfiguration = {
  components: [
    {
      component: TestComponent,
      componentName: 'test'
    }
  ],
  defaultLayout: {
    content: [{
      type: 'row',
      content: [{
        type: 'component',
        componentName: 'test',
        componentState: { label: 'A' }
      }, {
        type: 'column',
        content: [{
          type: 'component',
          componentName: 'test',
          componentState: { label: 'B' }
        }, {
          type: 'component',
          componentName: 'test',
          componentState: { label: 'C' }
        }]
      }, {
        type: 'component',
        componentName: 'test',
        componentState: { label: 'D' }
      }]
    }]
  }

};

@NgModule({
  imports: [BrowserModule, FormsModule, GoldenLayoutModule.forRoot(config)],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent]
})
export class AppModule { }
