class CartCtrl {
  constructor(AppConstants, Cart, Products) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.Cart = Cart;
    this.cartItem = []; 
    this.total = 0;
    this.Products = Products;
    this.getCartItem();
}

    getCartItem()   
    {
        var self = this;
        self.cartItem = [];
        self.total = 0;
        self.Cart.cartItem.forEach(function(element) {
           

        self.Products.get(element.name).then(function(product){
            var newProduct = Object.assign({}, product[0], {quantity:element.quantity});
            self.total = self.total + newProduct.price;
            self.cartItem.push(newProduct);
            });        
        });           
    }

    removeItem(name){
        var pos = this.cartItem.indexOf(name);
        this.cartItem.splice(pos,1);
    }
}

export default CartCtrl;