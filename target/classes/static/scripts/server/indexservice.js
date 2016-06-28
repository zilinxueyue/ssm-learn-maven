/**
 * Created by Alvin on 6/24/2016.
 */

angular.module('indexservice', [])
    .factory('postService', ["$q", "$http", function ($q, $http, $response) {
        var services = {};
        services.getTestRequest = function (url,postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: url,
                //headers: {'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'},// 'application/json'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                        //console.log(result.data[0].app_user_id);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return services;
    }])
