var app=angular.module('app',['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/home",{
        templateUrl:"home.html"
    }).
    when("/netflix",{
        templateUrl: "netflix.html"
    }).
    when("/amezon",{
        templateUrl: "amezon.html"
    }).
    when("/hostar",{
        templateUrl:"disney.html"
    }).
    when("/zee5",{
        templateUrl:"zee5.html"
    }).
    otherwise({
        redirectTo: 'index.html'
    });
}]);
app.controller('my',function($scope){
    
});