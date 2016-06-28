/**
 * Created by John on 5/6/2016.
 */
angular.module('diseasesServerModule', ['onsen'])

    /**********获取病虫害库******/
    .factory('getAllCategoryService', ["$q", "$http", function($q, $http, $response){
        var services={};
        services.getAllCategoryList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getAllCategoryUrl'),
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



    /**********获取病虫害列表******/
    .factory('getPestListService', ["$q", "$http", function($q, $http, $response){
        var services={};
        services.getPestListList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getPestListUrl'),
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

    /**********获取病虫害详情******/
    .factory('getPestDetailService', ["$q", "$http", function($q, $http, $response){
        var services={};
        services.getPestDetail=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getPestDetailUrl'),
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

    .factory('saveAllCategoryService', function(){
        var services={};
        var result={};
        services.setAllCategory = function(data){
            result = data;
        }
        services.getAllCategory = function(){
            return result;
        }
        return services;
    })


