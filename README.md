# AngularJS-BarcodeScanner

An anglar.js wrapper around window.plugins.barcodeScanner for Phonegap/Cordova plugin

## Installation

`$ bower install angular-phonegap-barcodeScanner`

## Usage

index.html

    <html>
    <head ng-app="sampleApp">
      <meta charset="utf-8" />
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script>
      <script src="bower_components/angular-phonegap-barcodeScanner/dist/angularjs-barcodeScanner.min.js"></script>
      <script src="./main.js"></script>
    </head>
    <body>
      <div ng-controller="sampleCtrl">
        <input type="button" ng-click="scan()" />
      </div>
    </body>
    </html>

main.js

    'use strict';

    angular.module('sampleApp', ['barcodeScanner'])
      .controller('sampleCtrl', function ($scope, barcodeScanner) {
        $scope.scan = function () {
          barcodeScanner.scan().then( function (result) {
            if (result.canceled) {
              return;
            }
            // text from qr code or barcode is contained in result.text
          }, funtion (err) {
            alert(err);
          });
        };
      });

## ! Important !

You should enable user parmissions to use camera.
Please check your `AndroidManifest.xml` on Android or `config.xml` on iOS.