angular.module('mrhlApp.services',[])
    .factory('mrhlTeamsAPIservice',function($http) {
        var mrhlTeamsAPI = [];
        var teams = $http.jsonp('http://localhost/mrhl/api/get_recent_posts/?post_type=team&callback=JSON_CALLBACK');
        teams.success(function(data) {
            $.each(data.posts, function(i, team) {
                mrhlTeamsAPI.push({
                    name: team.custom_fields.team_name[0],
                    tier: team.custom_fields.team_tier[0]
                })
            });
        });

        var factory = {};
        factory.getTeams = function () {
            return mrhlTeamsAPI;
        };
        return factory;
    })

    .factory('matchupAPIservice',function($http) {
        var homeTeamPlayers = [];
        var players = $http.jsonp('http://localhost/mrhl/api/get_recent_posts/?post_type=player&callback=JSON_CALLBACK');
        players.success(function(data) {
            $.each(data.posts, function(i, player) {
                homeTeamPlayers.push({
                    name: player.title_plain,
                    team: player.custom_fields.team_name_select[0],
                    jersey: player.custom_fields.jersey_number[0],
                    gamesPlayed: player.custom_fields.stats_gp[0],
                    goals: player.custom_fields.stats_goals[0],
                    assists: player.custom_fields.stats_assists[0]
                })
            });
        });

        var factory = {};
        factory.getPlayers = function () {
            return homeTeamPlayers;
        };
        return factory;
    })


