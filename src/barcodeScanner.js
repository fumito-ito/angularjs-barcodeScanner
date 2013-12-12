'use strict';

angular.module('barcodeScanner', []).constant('barcodeScanner_msgs', {
    'errors.barcodeScanner.undefined': 'barcode scanning functions are not defined',
    'errors.barcodeScanner.scanFailed': 'Unable to scan this code'
});

angular.module('barcodeScanner').factory('barcodeScanner',[
    '$q',
    '$rootScope',
    '$window',
    'barcodeScanner_msgs',
    function ($q, $rootScope, $window, barcodeScanner_msgs) {
        //
        var scanner = {};

        /**
         * [scan description]
         * @return {[type]} [description]
         */
        scanner.scan = function () {
            var deferred = $q.defer();

            if ($window.plugins && $window.plugins.barcodeScanner) {
                $window.plugins.barcodeScanner.scan( function (result) {
                    // success callback
                    $rootScope.$apply( function () {
                        deferred.resolve(result);
                    });
                }, function () {
                    // error callback
                    $rootScope.$broadcast('error', barcodeScanner_msgs['errors.barcodeScanner.scanFailed']);
                    $rootScope.$apply( function () {
                        deferred.reject(barcodeScanner_msgs['errors.barcodeScanner.scanFailed']);
                    });
                });
            } else {
                // scanner functions are not defined
                $rootScope.$broadcast('error', barcodeScanner_msgs['errors.barcodeScanner.undefined']);
                $rootScope.$apply( function () {
                    deferred.reject(barcodeScanner_msgs['errors.barcodeScanner.undefined']);
                });
            }

            return deferred.promise;
        };

        return scanner;
    }]);