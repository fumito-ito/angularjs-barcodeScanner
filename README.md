# AngularJS-BarcodeScanner

An anglar.js wrapper around window.plugins.barcodeScanner for Phonegap/Cordova plugin

# Example

````
angular.module('app', ['barcodeScanner'])
    .controller('mainCtrl', function($scope, barcodeScanner) {
        $scope.code = barcodeScanner.scan().then( function (result) {
            return result;
        });
    });
````
