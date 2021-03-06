import * as GoldenLayout from 'golden-layout';
import { Component, Inject } from '@angular/core';
import { GoldenLayoutContainer } from '@embedded-enterprises/ng6-golden-layout';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  id = 0;
  constructor(
    // private goldenLayout: GoldenLayout,
    @Inject(GoldenLayoutContainer) private container: GoldenLayout.Container
  ) {

    this.id = new Date().getTime();
    console.log('done', this.id);
   }
}
