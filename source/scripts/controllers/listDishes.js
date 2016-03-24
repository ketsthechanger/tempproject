/**
 * @ngdoc function
 * @name group1CapstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the group1CapstoneApp
 */
angular
    .module('group1CapstoneApp')
    .controller('listDishesCtrl',
    ['$localStorage', '$scope', '$routeParams',
      function( $localStorage, $scope, $routeParams ){
        var tmpUserName = $localStorage.userName;
        console.log('journey: ' + $routeParams.journey );

        $scope.isFollowing = false;

        for(var i in $localStorage.list) {
          if ($localStorage.list[i].userName === tmpUserName && $localStorage.list[i].userCuisine === $routeParams.journey) {
            $scope.isFollowing = true;
            console.log('Now following');
            break;
          } else {
          }
        }

        $scope.$storage = $localStorage.$default({
          userName : 'Tomo'
          ,list : []
        });

        $scope.follow = function(){
          var isExist = false;

          for(var i in $localStorage.list) {
            if ($localStorage.list[i].userName === tmpUserName) {
              $localStorage.list[i].userCuisine = $routeParams.journey;
              console.log('name:' + tmpUserName + ' is updated.');
              isExist = true;
              break;
            } else {
            }
          }

          if (!isExist){
            $localStorage.list.push({userName:tmpUserName, userCuisine:$routeParams.journey});
            console.log('name:' + tmpUserName + ' is added.');
          }
          $scope.isFollowing = true;
          console.log('follow');
        }

        $scope.cancel = function(){
          var result = [];
          for(var i in $localStorage.list)
          {
            if ($localStorage.list[i].userName === tmpUserName){
              console.log('name:' + $localStorage.list[i].userName + ' is deleted.');
            }else{
              result.push($localStorage.list[i]);
            }
          };

          $localStorage.list = result;

          $scope.isFollowing = false;
          console.log('cancel');
        }

        $scope.delete = function(){
          $localStorage.$reset({
            user : 'Tomo'
            ,list : []
          });

          console.log('delete');
        }
      }
    ]
  )
;
