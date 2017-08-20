export default class Cart {
  constructor(AppConstants) {
    'ngInject';

    this._AppConstants = AppConstants;        
    this.cartItem = [];
  }

  getCartItemCount(){
      var itemCount = 0;
      if (this.cartItem.length > 0)
      {
        this.cartItem.forEach(function(item) {
            itemCount = itemCount + item.quantity;            
        });      
      }      
      return itemCount;
  }

  addToCart(quantity,name)
  {
      if (this.cartItem[name] == null)
          this.cartItem.push({name, quantity});
      else
          this.cartItem[name].quantity = this.cartItem[name].quantity + quantity;

  }




}
