/**
 * Created by John on 3/8/2016.
 */

angular.module('personalserver', ['onsen'])
    .factory('getPersonalFarmService', ["$q", "$http", function($q, $http, $response){
        var personalFarmInfo={app_user_id:'',user_pic_path:'',user_pic_name:'',app_user_name:'',iden_type_name:'',app_mobile_no:'',cust_addr:'',crop_no:'',all_answers:'',all_orders:'',card_flag:'',prop_flag:''};


        var getApp_user_id= function() {
            return personalFarmInfo. app_user_id;
        }
        var setApp_user_id=function(app_user_id) {
            personalFarmInfo.app_user_id = app_user_id;
        }
        var getUser_pic_path= function() {
            return personalFarmInfo. user_pic_path;
        }
        var setUser_pic_path=function(user_pic_path) {
            personalFarmInfo.user_pic_path = user_pic_path;
        }
        var getUser_pic_name= function() {
            return personalFarmInfo. user_pic_name;
        }
        var setUser_pic_name=function(user_pic_name) {
            personalFarmInfo.user_pic_name = user_pic_name;
        }
        var getApp_user_name= function() {
            return personalFarmInfo. app_user_name;
        }
        var setApp_user_name=function(app_user_name) {
            personalFarmInfo.app_user_name = app_user_name;
        }
        var getIden_type_name= function() {
            return personalFarmInfo. iden_type_name;
        }
        var setIden_type_name=function(iden_type_name) {
            personalFarmInfo.iden_type_name = iden_type_name;
        }
        var getApp_mobile_no= function() {
            return personalFarmInfo. app_mobile_no;
        }
        var setApp_mobile_no=function(app_mobile_no) {
            personalFarmInfo.app_mobile_no = app_mobile_no;
        }
        var getCust_addr= function() {
            return personalFarmInfo. cust_addr;
        }
        var setCust_addr=function(cust_addr) {
            personalFarmInfo.cust_addr = cust_addr;
        }
        var getCrop_no= function() {
            return personalFarmInfo. crop_no;
        }
        var setCrop_no=function(crop_no) {
            personalFarmInfo.crop_no = crop_no;
        }
        var getAll_answers= function() {
            return personalFarmInfo. all_answers;
        }
        var setAll_answers=function(all_answers) {
            personalFarmInfo.all_answers = all_answers;
        }
        var getAll_orders= function() {
            return personalFarmInfo. all_orders;
        }
        var setAll_orders=function(all_orders) {
            personalFarmInfo.all_orders = all_orders;
        }
        var getCard_flag= function() {
            return personalFarmInfo. card_flag;
        }
        var setCard_flag=function(card_flag) {
            personalFarmInfo.card_flag = card_flag;
        }
        var getProp_flag= function() {
            return personalFarmInfo. prop_flag;
        }
        var setProp_flag=function(prop_flag) {
            personalFarmInfo.prop_flag = prop_flag;
        }



        return {
            setAll_answers:setAll_answers,
            setAll_orders:setAll_orders,
            setApp_mobile_no:setApp_mobile_no,
            setApp_user_id:setApp_user_id,
            setApp_user_name:setApp_user_name,
            setCard_flag:setCard_flag,
            setCrop_no:setCrop_no,
            setCust_addr:setCust_addr,
            setIden_type_name:setIden_type_name,
            setProp_flag:setProp_flag,
            setUser_pic_name:setUser_pic_name,
            setUser_pic_path:setUser_pic_path,
            getApp_user_id:getApp_user_id,
            getAll_answers:getAll_answers,
            getAll_orders:getAll_orders,
            getApp_mobile_no:getApp_mobile_no,
            getApp_user_name:getApp_user_name,
            getCard_flag:getCard_flag,
            getCrop_no:getCrop_no,
            getCust_addr:getCust_addr,
            getIden_type_name:getIden_type_name,
            getProp_flag:getProp_flag,
            getUser_pic_name:getUser_pic_name,
            getUser_pic_path:getUser_pic_path

        }
    }])


    /**
     * 农民  http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo&app_user_id=
     * */
    .factory('personalService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalFarmRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
           // var postData = {userid:getUserInfoService.getApp_user_id()};

            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo",postData)
            $http({
                method: 'POST',
                url: getUrlByKey('getPersonalInfoUrl'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })

                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalFarmRequests: personalFarmRequests
        };




    }])



    /**
     * 农民  改密码功能实现
     * */
    .factory('personalChangePwdService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalChangePwdRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('changePasswordUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })

                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else  if(angular.equals("-1",result.code)) {
                        /******原密码错误********/
                        ons.notification.alert({
                            title: "温馨提示",
                            buttonLabel:"确定",
                            message: "原始密码错误"
                        });


                    }else {

                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);

                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalChangePwdRequests: personalChangePwdRequests
        };




    }])



    /**
     * 农民  获取个人信息
     * */
    .factory('personalFarmGetPerDetailService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var getPersonalDetailRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getPersonalFarmDetailUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else  if(angular.equals("-1",result.code)) {
                        /******原密码错误********/
                        ons.notification.alert({
                            title: "温馨提示",
                            buttonLabel:"确定",
                            message: "个人中心详细信息失败"
                        });


                    }else {

                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);

                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            getPersonalDetailRequests: getPersonalDetailRequests
        };
    }])




    /**
     * 农民  修改个人信息
     * */
    .factory('personalFarmMgrEditService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalChangeFarmMgrEditRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('changepersonalfarmUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else  if(angular.equals("-1",result.code)) {
                        /******原密码错误********/
                        ons.notification.alert({
                            title: "温馨提示",
                            buttonLabel:"确定",
                            message: "原始密码错误"
                        });


                    }else {

                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);

                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalChangeFarmMgrEditRequests: personalChangeFarmMgrEditRequests
        };
    }])



    /**
     *   退出登录状态
     * */
    .factory('personalLogOutService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalLogOutRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('logoutUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })

                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else  if(angular.equals("-1",result.code)) {
                        ///******原密码错误********/
                        //ons.notification.alert({
                        //    title: "温馨提示",
                        //    buttonLabel:"确定",
                        //    message: "原始密码错误"
                        //});
                    }else {
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalLogOutRequests: personalLogOutRequests
        };




    }])






    /**
     * 农资厂商  http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo&app_user_id=
     * */
    .factory('personalAgrService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalAgrRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            // var postData = {userid:getUserInfoService.getApp_user_id()};

            $http({
                method: 'POST',
                url: getUrlByKey('personalAgrUrl'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo",postData)
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalAgrRequests: personalAgrRequests
        };
    }])

    /**
     * 合作网点  http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo&app_user_id=
     * */
    .factory('personalCooperationService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalCooperationRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            // var postData = {userid:getUserInfoService.getApp_user_id()};

            $http({
                method: 'POST',
                url: getUrlByKey('personalCooperationUrl'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo",postData)
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalCooperationRequests: personalCooperationRequests
        };
    }])

    /**
     * 订单供应商  http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo&app_user_id=
     * */
    .factory('personalSupplierService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var personalSupplierRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            // var postData = {userid:getUserInfoService.getApp_user_id()};

            $http({
                method: 'POST',
                url: getUrlByKey('personalSupplierUrl'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo",postData)
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            personalSupplierRequests: personalSupplierRequests
        };
    }])



    .factory('uploadService', ["$q", "$http","getUserInfoService", function($q, $http, $response,getUserInfoService){
        var services={};

        //services.uploadPicRequests = function(postData){
        //    var deferred = $q.defer();
        //    var promise = deferred.promise;
        //    // var postData = {userid:getUserInfoService.getApp_user_id()};
        //
        //    $http({
        //        method: 'POST',
        //        url: getUrlByKey('personalAgrUrl'),
        //        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        //        data: tranjsontoparam(postData)
        //    })
        //    //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getPersonalInfo",postData)
        //        .success(function(result){
        //            if(angular.equals("1",result.code)) {
        //                deferred.resolve(result.data);
        //            }else{
        //                deferred.reject(result);
        //            }
        //        })
        //        .error(function(error){
        //            //alert("http get error "+error);
        //            deferred.reject(error);
        //        });
        //    return  promise;
        //}


        services.uploadImags=function(strUrlParam,imgData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('uploadfile')+strUrlParam,
                headers: {'Content-Type': undefined},
                data: imgData
            }).success(function (result) {
                if(angular.equals("1",result.code)) {
                    deferred.resolve(result.data);
                    //alert("data"+result);
                    //alert("pic_path"+result.pic_path);

                }else{
                    deferred.reject(result);
                    //alert("error"+result);
                    //alert("error pic_path"+result.pic_path);
                }

            }).error(function(error){
                //  alert("http get error "+error);
                deferred.reject(error);
            });
            return promise;
        }




        return services;

        //return {
        //    uploadPicRequests: uploadPicRequests
        //};



    }])

    .factory('getAdvertisePictureService', ["$q", "$http", function($q, $http, $response){
        var services={};

        services.getPictureUrl=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
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



