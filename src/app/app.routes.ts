import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Login } from './page/login/login';
import { Customer } from './page/dashboard/customer/customer';
import { Item } from './page/dashboard/item/item';
import { Order } from './page/dashboard/order/order';
import { DashRoot } from './page/dashboard/dash-root/dash-root';
import { Home } from './page/home/home';

export const routes: Routes = [
    // dashboard/customer
    // dashboard/item
    // dashboard/order
    // dashboard/
    {
        path:"",
        component:Home
    },
    {
        path:"dashboard",
        component:Dashboard,
        children:[
            {
                path:"",
                component:DashRoot
            },
            {
                path:"customer",
                component:Customer
            },
            {
                path:"item",
                component:Item
            },
            {
                path:"order",
                component:Order
            }
        ]
    },
    {
        path:"login",
        component:Login
    }
];




// http://localhost:4200/
