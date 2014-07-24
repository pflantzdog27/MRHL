angular.module('mrhlApp.controllers', [])
    .controller('teamsController',function($scope, mrhlTeamsAPIservice, matchupAPIservice) {
        $scope.teams = [];
        $scope.players = [];
        $scope.homeTeam = '';
        $scope.awayTeam = '';

        init();

        function init() {
            $scope.teams = mrhlTeamsAPIservice.getTeams();
            $scope.players = matchupAPIservice.getPlayers();
        }

    })



