//http://jira.54.194.71.178.xip.io/browse/CTONE-13 - Implementing controller for displaying list of dishes

angular
    .module('FoodieJournal', [])
    .controller('culinaryController', culinaryController)
    .factory('dishService', dishFactory);

//note we are creating a service with 'factory' recipe
function dishFactory($http) {
    this.$inject = ['$http'];

    return {
        getdishes: getdishes
    };

    function getdishes () {
        return $http.get('./api/dishes.json')
    }
}

function culinaryController($scope, dishService, $timeout) {
    this.$inject = ['$scope', 'dishService', '$timeout'];

    dishService.getdishes().then(function(response) {
        $timeout(function () {
            $scope.dishes = response.data;
        }, 10);
    });
}
