class ProductCtrl {
  constructor(AppConstants,product) {
    'ngInject';

    this.product = product;
    this.appName = AppConstants.appName;
    this.qty = 1;
    }
}

export default ProductCtrl;