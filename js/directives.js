angular.module('mrhlApp.router', ['ngRoute','ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'teamsController',
                templateUrl: 'partials/new-game.html'
            })
            .when('/game-selection', {
                controller: 'teamsController',
                templateUrl: 'partials/game-selection.html'
            })
            .when('/matchup', {
                controller: 'teamsController',
                templateUrl: 'partials/matchup.html'
            })
            .otherwise({ redirectTo: '/'})
    });
