import { Routes } from '@angular/router';
import { ProductListsComponent } from './pages/product-lists/product-lists.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:ProductListsComponent
    },
    {
        path:'cart',
        component:CartComponent
    }
];
 