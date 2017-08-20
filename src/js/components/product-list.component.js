class ProductListCtrl {
  constructor(Products, $scope) {
    'ngInject';

    this._Products = Products;
    this.runQuery();
    
  }

  runQuery() {
    // Show the loading indicator
    this.loading = true;
    
    this._Products
      .all()
      .then(
        (res) => {
          this.loading = false;

          this.products = res;
        }
      );
  }

}



let ProductList = {  
  controller: ProductListCtrl,
  templateUrl: 'components/product-list.html'
};

export default ProductList;
