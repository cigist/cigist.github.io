var app = angular.module('MyApp', ['ngRoute']);
app.controller('GamesController', ['$scope', function ($scope) {

    $scope.dataGame = [
        { "url": "#jsintro/", "name": "JS Intro" },
        { "url": "#whileloop/", "name": "While Loop" },
        { "url": "#function/", "name": "Function" },
        { "url": "#event/", "name": "Event" },
        { "url": "#array/", "name": "Array" },
        { "url": "#ajax/", "name": "Master Bank" },
        { "url": "#masterdetail/", "name": "Master Detail" }
    ];

}]);

var ModalInstanceCtrl = function ($scope, $modalInstance, userForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.userForm.$valid) {
            console.log('user form is in scope');
            $modalInstance.close('closed');
        } else {
            console.log('userform is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
