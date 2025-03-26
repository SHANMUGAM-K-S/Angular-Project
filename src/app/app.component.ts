import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListsComponent } from "./pages/product-lists/product-lists.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomm';
  
}
