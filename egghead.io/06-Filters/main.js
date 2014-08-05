var myApp = angular.module("myApp", []);
myApp.factory("Data", function(){
	return {message:"I'm message from factory."};
});

myApp.filter("reverse", function(Data){
	return function(text){
		return text.split("").reverse().join("") + " " + Data.message;
	};
});
myApp.filter("reverse2", function(Data){
	return function(text){
		return text.split("").reverse().join("") + " " + Data.message;
	};
});

function FirstCtrl ($scope, Data){
	$scope.data = Data;
};

function SecondCtrl ($scope, Data){
	$scope.data = Data;
	// $scope.reversedMessage = function(){
	// 	return $scope.data.message.split("").reverse().join("");
	// };

	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
	};
};