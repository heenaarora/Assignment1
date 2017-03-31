(function () {
  'use strict';
  angular.module('LunchCheckerApp', [])

  .controller('LunchCheckerController',LunchCheckerController);
  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope){
    $scope.lunchMenu = "";
    $scope.message = "Please Enter Data First";
    $scope.setMessageColor = 0;
    var splitSeperator = ',';
    var actualArrayLength = 0;

    $scope.checkItemsBtn = function () {
      if($scope.lunchMenu===""){
        $scope.message="";
      }
      else {
        $scope.setMessageColor = "setGreen";
        var str = $scope.lunchMenu;
        var arrayOfStrings = str.split(splitSeperator);
        actualArrayLength = arrayOfStrings.length;
        for(var i=0;i<arrayOfStrings.length;i++){
          if(arrayOfStrings[i].trim() === ""){
            actualArrayLength = actualArrayLength - 1;
          }
        }
        if(actualArrayLength>2){
          $scope.message = "Too Much!!";
        }
        else {
          $scope.message = "Enjoy!!";
        }
      }
    };
    };
})();
