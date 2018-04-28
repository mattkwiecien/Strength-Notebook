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