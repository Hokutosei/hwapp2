var app = angular.module('hwapp2', []);

app.controller('index', function($scope) {
    $scope.test = "testing only"
})

app.controller('about', function($scope) {
    $scope.test = "testing about only"
})