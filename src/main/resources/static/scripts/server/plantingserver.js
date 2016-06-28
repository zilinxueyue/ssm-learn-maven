/**
 * Created by John on 5/6/2016.
 */
angular.module('plantingServerModule', ['onsen'])

    /**********获取种植技术库******/
    .factory('getAllPlantingService', ["$q", "$http", function($q, $http, $response){
        var services={};
        services.getAllPlantingList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getAllPlantingUrl'),
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



    /**********获取种植技术列表******/
    .factory('getPlantingListService', ["$q", "$http", function($q, $http, $response){
        var services={};
        services.getPlantingListList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getPlantingListUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result);
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

    /**********获取种植技术详细******/
    .factory('getPlantingDetailService', ["$q", "$http", function($q, $http, $response){
        var services={};
        services.getPlantingDetailList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getPlantingDetailUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
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

    .factory('saveAllPlantingService', function(){
        var services={};
        var result={};
        services.setAllPlanting = function(data){
            result = data;
        }
        services.getAllPlanting = function(){
            return result;
        }
        return services;
    })






