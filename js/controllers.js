angular.module('mrhlApp.controllers', [])
    .controller('teamsController',function($scope, $modal, mrhlTeamsAPIservice, matchupAPIservice) {
        $scope.teams = [];
        $scope.players = [];
        $scope.homeTeam = '';
        $scope.awayTeam = '';

        init();

        function init() {
            $scope.teams = mrhlTeamsAPIservice.getTeams();
            $scope.players = matchupAPIservice.getPlayers();
        }

        // lightbox
        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                size: size,
                resolve: {
                    players: function () {
                        return $scope.players
                    },
                    homeTeam : function() {
                        return $scope.homeTeam
                    },
                    awayTeam : function() {
                        return $scope.awayTeam
                    }
                }
            });

            modalInstance.result.then(function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };



    }) //close controller

    // FUNCTION FOR LIGHTBOX -- ONLY USED FOR INSTANCES
    var ModalInstanceCtrl = function ($scope, $modalInstance, players, homeTeam, awayTeam) {

        $scope.players = players;
        $scope.homeTeam = homeTeam;
        $scope.awayTeam = awayTeam;

        $scope.ok = function () {
            $modalInstance.close(/*$scope.selected.item*/);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

