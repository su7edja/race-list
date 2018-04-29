angular.module('RaceCtrl', []).controller('RaceController', function($scope, Race) {

    $scope.tagline = 'Race everything!';

    $scope.myRaceList = Race.get;

});
