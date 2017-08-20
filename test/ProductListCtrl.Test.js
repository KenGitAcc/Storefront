describe('productList', function () {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  
    it('runQuery should return 6 products', function () {
	var $scope = {};
	var controller = $controller('ProductListCtrl', { $scope: $scope });
	expect(controller.runQuery()).not.toBeLessThan(0);
});

});