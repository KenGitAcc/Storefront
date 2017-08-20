import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);



import ProductsService from './products.service';
servicesModule.service('Products', ProductsService);

import CartService from './cart.service';
servicesModule.service('Cart', CartService);



export default servicesModule;
