/**
 * Created by John on 4/25/2016.
 */
angular.module('homepageServerModule', ['onsen'])


    .factory('getPictureListService', ["$q", "$http", function($q, $http, $response){
        var services={};

        services.getPictureList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('getAdInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);

                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }

        return services;
    }])




