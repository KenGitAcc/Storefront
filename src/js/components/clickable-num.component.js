class ClickableNumCtrl {
    constructor() {
        'ngInject';        
    } 

    increment()
    {
        this.qty++;
    }  

    decrement(){
        this.qty--;
    } 
}

let ClickableNum = {
    bindings: {
        qty: '='
    },
    controller: ClickableNumCtrl,
    templateUrl: 'components/clickable-num.html'
};

export default ClickableNum;
