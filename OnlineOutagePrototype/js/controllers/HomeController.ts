﻿/// <reference path='../_all.ts' />

module map {
    'use strict';

    /**
     * The main controller for the app. The controller:
     * - retrieves and persists the model via the todoStorage service
     * - exposes the model to the template and provides event handlers
     */
    export class HomeController {

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            '$scope',
            '$location'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(
            private $scope,
            private $location: ng.ILocationService
            ) {

            $scope.map = { center: { latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
            $scope.options = { scrollwheel: false };

            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML

            // watching for events/changes in scope, which are caused by view/user input
            // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.

            if ($location.path() === '') $location.path('/');
            $scope.location = $location;
        }

    }

}
