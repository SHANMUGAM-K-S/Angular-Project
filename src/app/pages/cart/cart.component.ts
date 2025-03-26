import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemsComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService=inject(CartService)
}
