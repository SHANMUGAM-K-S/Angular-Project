import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css',
  template:`
 

  `
})
export class PrimaryButtonComponent {
  label=input('')
  btnClick=output()


}
