/**
 * Created by BOB on 2014/8/4.
 */
var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function(){
    var Avengers = {};

    Avengers.cast = [
    	{
    		name: "Robert Downey Jr",
    		charactor:"Tony Stark / Iron Man"
    	},
    	{
    		name:"Chris Evans",
    		charactor:"Steve Roger / Captain American"
    	},
    	{
    		name:"Mark Ruffale",
    		charactor:"Bruce Banner / The Bulk"
    	},
    	{
    		name:"Chris Homsworth",
    		charactor:"Thor"
    	},
    	{
    		name:"scarlett Johansson",
    		charactor:"Natasha Romanoff / Black window"
    	},
    	{
    		name:"Jeremey Renner",
    		charactor:"Clint Barton / Hawkeye"
    	},
    	{
    		name:"Tom Hiddleston",
    		charactor:"Loki"
    	},
    	{
    		name:"Clark Gregg",
    		charactor:"Agent Phil Coulson"
    	}
    ];

    return Avengers;
});

function AvengersCtrl($scope, Avengers){
    $scope.avengers = Avengers;
};
