import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay'
import { trigger, state, transition,style, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state('green', style({ 'background-color': 'green' })),
      state('red', style({ 'background-color': 'red' })),
      transition('green => red', animate(1000)),
      transition('red => green', animate(1000)),
    ])
  ]
})
export class AppComponent {
  squareState : string;
  darkTheme = false;
  constructor(private oc: OverlayContainer) {

  }
  switchThems(dark) {
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add('myapp-dark-theme');
  }
  onClick() {
    this.squareState = this.squareState === 'red'? 'green': 'red';
  }
}