import angular from 'angular';

let cartModule = angular.module('app.cart', []);

import CartConfig from './cart.config';
cartModule.config(CartConfig);


// Controllers
import CartCtrl from './cart.controller';
cartModule.controller('CartCtrl', CartCtrl);


export default cartModule;