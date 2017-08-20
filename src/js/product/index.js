import angular from 'angular';

let productModule = angular.module('app.product', []);

import ProductConfig from './product.config';
productModule.config(ProductConfig);


// Controllers
import ProductCtrl from './product.controller';
productModule.controller('ProductCtrl', ProductCtrl);


export default productModule;

