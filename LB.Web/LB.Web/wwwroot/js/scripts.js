var LBApp = angular.module('LBApp', []);
LBApp.controller('currentWorkoutController', ['$scope', '$http', function ($scope, $http) {
    $scope.sets;
    $scope.exerciseRows = [];

    (function init() {
        $scope.exerciseRows.push(new ExerciseRow());
    })();

    $scope.getNumberOf = function (sets) {
        if (!sets) { return; }
        return createRangeArrayFromNumber(sets);
    }

    $scope.addNewExerciseRow = function (row) {
        if (!row.isEmpty) { return; }
        row.isEmpty = false;

        $scope.exerciseRows.push(new ExerciseRow());
    }

    $scope.save = function () {
        
    }

    function createRangeArrayFromNumber(number) {
        var arr = [];
        for (var i = 0; i < number; i++) {
            arr.push(i);
        }
        return arr;
    }

    function ExerciseRow() {
        return { isEmpty: true }
    }
}]);
LBApp.controller('dashboardController', ['$scope', function ($scope) {
    var myLineChart = new Chart("liftChart", {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}]);