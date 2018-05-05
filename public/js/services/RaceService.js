angular.module('RaceService', []).factory('Race', ['$http', function($http) {

    return {
        // call to get all races
        get : function() {
            console.log("inside RaceService get");
            return $http.get('/api/races');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new race
        create : function(raceData) {
            console.log("inside RaceService create");
            console.log(raceData);
            return $http.post('/api/races', raceData);
        },

        // call to DELETE a race
        delete : function(id) {
            return $http.delete('/api/races/' + id);
        }
    }       

}]);