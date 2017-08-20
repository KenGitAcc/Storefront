class AppHeaderCtrl {
  constructor(AppConstants, Cart, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;        
    
  }
  
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
