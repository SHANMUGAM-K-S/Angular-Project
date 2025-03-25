import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html'
  ,
  template: `
  
  
  
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
showBtn(){
  console.log("clicked");
}

}
