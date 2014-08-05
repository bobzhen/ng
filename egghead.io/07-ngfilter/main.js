/**
 * Created by BOB on 2014/8/4.
 */
var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function(){
    var Avengers = {};

    Avengers.cast = [];

    return Avengers;
});

function AvengersCtrl($scope, Avengers){
    $scope.avengers = Avengers;
};
