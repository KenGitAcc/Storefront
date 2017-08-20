class AddToCartCtrl {
    constructor(Cart, $rootScope) {
        'ngInject';
        this.Cart = Cart;
        this.$rootScope = $rootScope;
    }

    addToCart(quantity, name) {
        this.Cart.addToCart(quantity, name);
        var itemCount = this.Cart.getCartItemCount();
        this.$rootScope.$broadcast("Cart-Item-Count-Changed", itemCount);        
    }

}



let AddToCart = {
    bindings: {
        quantity: '=',
        name: '@'
    },
    controller: AddToCartCtrl,
    templateUrl: 'components/add-to-cart.html'
};

export default AddToCart;
