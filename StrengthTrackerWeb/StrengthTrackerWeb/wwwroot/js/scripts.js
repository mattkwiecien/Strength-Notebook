var STApp = angular.module('STApp', []);
STApp.controller('newWorkoutController', ['$scope', function ($scope) {
    $scope.Test = "HELLO WORLD";
    $scope.sets = 0;

    $scope.getNumberOf = function (sets) {
        var divs = [];
        for (var i = 0; i < sets; i++) {
            divs.push(i);
        }
        return divs;
    }
}]);