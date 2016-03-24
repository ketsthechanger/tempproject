function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

var app = angular.module('Yelp', []);
app.controller('MainCtrl', ['$scope', 'MyYelpAPI', function($scope, MyYelpAPI) {
    $scope.businesses = [];
    MyYelpAPI.retrieveYelp('', function(data) {
        $scope.businesses = data.businesses;
        console.log($scope.businesses);

    });

}]).factory("MyYelpAPI", function($http) {
    return {
        "retrieveYelp": function(name, callback) {
            var method = 'GET';
            var url = 'http://api.yelp.com/v2/search';
            var params = {
                callback: 'angular.callbacks._0',
                location: 'New+York',
                oauth_consumer_key: 'vzIlfhxusCyYRLjH4yPTgQ', //Consumer Key
                oauth_token: 'PtZwe2usX-711OcQXdl51QBp6DLRc9it', //Token
                oauth_signature_method: "HMAC-SHA1",
                oauth_timestamp: new Date().getTime(),
                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                term: 'seafood',
                limit: '6'
            };
            var consumerSecret = 'wEhKxnSkL8G6j-ScaSjc3vbIyPk'; //Consumer Secret
            var tokenSecret = '7_EIrQ1O0s_QJJ3gtf9zPkzqFtc'; //Token Secret
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;
            $http.jsonp(url, {params: params}).success(callback);
        }
    }
});


var Yelp = require('Yelp');

var yelp = new Yelp({
    consumer_key: 'vzIlfhxusCyYRLjH4yPTgQ',
    consumer_secret: 'wEhKxnSkL8G6j-ScaSjc3vbIyPk',
    token: 'PtZwe2usX-711OcQXdl51QBp6DLRc9it',
    token_secret: '7_EIrQ1O0s_QJJ3gtf9zPkzqFtc',
});

yelp.sesearch({ term: 'food', location: 'Montreal' })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });

