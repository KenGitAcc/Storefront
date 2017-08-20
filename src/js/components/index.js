import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ProductList from './product-list.component'
componentsModule.component('productList', ProductList);

import ProductPreview from './product-preview.component'
componentsModule.component('productPreview', ProductPreview);

import AddToCart from './add-to-cart.component'
componentsModule.component('addToCart', AddToCart);

import MiniCart from './mini-cart.component'
componentsModule.component('miniCart', MiniCart);

import ClickableNum from './clickable-num.component'
componentsModule.component('clickableNum', ClickableNum);



export default componentsModule;
