/**
 * Created by AOWPINS01_01 on 6/26/2015.
 */

angular
    .module('foodieJournal.yelp',[])
    .controller('YelpController',['$scope',function($scope,YelpFactory){
        this.inject =   ['$scope'];

        var auth = {
            consumerKey : "CrKzjBCd69V9EGsY4Oy1cg",
            consumerSecret : "7AVq-1RvrMnAvA6EvSIKUsOnqSU",
            accessToken : "jnz8wmnkZaJa5vnYlBdZRbGV8mDxVELE",
            accessTokenSecret : "KCqQPxhqeYMFpvjFK_WXaJ18RVg",
            serviceProvider : {
                signatureMethod : "HMAC-SHA1"
            }
        };

        var terms = 'seafood';
        var near = 'NewYork';

        var accessor = {
            consumerSecret : auth.consumerSecret,
            tokenSecret : auth.accessTokenSecret
        };

        parameters = [];
        parameters.push(['term', terms]);
        parameters.push(['location', near]);
        parameters.push(['callback', 'cb']);
        parameters.push(['oauth_consumer_key', auth.consumerKey]);
        parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
        parameters.push(['oauth_token', auth.accessToken]);
        parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

        var message = {
            'action' : 'http://api.yelp.com/v2/search',
            'method' : 'GET',
            'parameters' : parameters
        };

        OAuth.setTimestampAndNonce(message);
        OAuth.SignatureMethod.sign(message, accessor);

        var parameterMap = OAuth.getParameterMap(message.parameters);
        console.log(parameterMap);

        $.ajax({
            'url' : message.action,
            'data' : parameterMap,
            'dataType' : 'jsonp',
            'jsonpCallback' : 'cb',
            'success' : function(data, textStats, XMLHttpRequest) {
                console.log(data);

                $scope.$apply(function(){
                    $scope.data = data;
                });
            }
        })
    }]);
