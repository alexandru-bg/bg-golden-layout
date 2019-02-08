import * as GoldenLayout from 'golden-layout';
import { Component, Inject } from '@angular/core';
import { GoldenLayoutContainer } from '@embedded-enterprises/ng6-golden-layout';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(
    private goldenLayout: GoldenLayout,
    @Inject(GoldenLayoutContainer) private container: GoldenLayout.Container
  ) { }
}
