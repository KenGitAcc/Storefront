function ProductConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.product', {
    url: '/product/:title',
    controller: 'ProductCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'product/product.html',
    title: 'Product',
    resolve: {
      product: function(Products, $state, $stateParams) {
        return Products.get($stateParams.title).then(
          (product) => product[0],
          (err) => $state.go('app.home')
        )
      }
    }
    
  });

};

export default ProductConfig;