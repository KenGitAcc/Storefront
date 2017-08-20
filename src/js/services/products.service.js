export default class Products {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;


  }

  all() {
    return this._$http.get('products.json').then((res) => res.data);
  }

  get(name) {
     var deferred = this._$q.defer();

     var allProducts;
     this._$http.get('products.json').then(
                            (res) => { 
                                       allProducts = res.data;

                                       var product = allProducts.filter(function (item){
                                          return item.title == name;
                                        });

                                        deferred.resolve(product);

                                    });
    return deferred.promise;  
  }
}



  