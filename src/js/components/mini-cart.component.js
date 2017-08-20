class MiniCartCtrl {
    constructor(Cart, Products, $scope, $document) {
        'ngInject';
        this.Cart = Cart;
        this.Products = Products;
        this.cartItemCount = 0; 
        this.cartItem = []; 
        this.total = 0;
        this.IsMinimized = true;      

        this.$scope = $scope;
        this.$document = $document;

        this.$scope.$on('Cart-Item-Count-Changed', (ev, newCount) => {
            this.cartItemCount = newCount;
        });
        
    }

    toggleCart($event) {
        $event.preventDefault();
        $event.stopPropagation();

        this.IsMinimized = !this.IsMinimized; 
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


let MiniCart = {
    controller: MiniCartCtrl,
    templateUrl: 'components/mini-cart.html'
};

export default MiniCart;