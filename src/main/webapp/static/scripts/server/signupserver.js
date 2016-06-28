/**
 * Created by John on 3/1/2016.
 */
//var param = function(obj) {
//    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
//
//    for(name in obj) {
//        value = obj[name];
//
//        if(value instanceof Array) {
//            for(i=0; i<value.length; ++i) {
//                subValue = value[i];
//                fullSubName = name + '[' + i + ']';
//                innerObj = {};
//                innerObj[fullSubName] = subValue;
//                query += param(innerObj) + '&';
//            }
//        }
//        else if(value instanceof Object) {
//            for(subName in value) {
//                subValue = value[subName];
//                fullSubName = name + '[' + subName + ']';
//                innerObj = {};
//                innerObj[fullSubName] = subValue;
//                query += param(innerObj) + '&';
//            }
//        }
//        else if(value !== undefined && value !== null)
//            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//    }
//
//    return query.length ? query.substr(0, query.length - 1) : query;
//};



angular.module('signupServerModule', ['onsen','appUiRouteModule'])

    .factory('getUserDetailService', ["$q", "$http", function($q, $http, $response){
        var user={appMobileNo:'',appPwd:'',idenTypeId:'',appUserId:''};
        var setAppMobileNo=function(mobileNo){
            user.appMobileNo=mobileNo;
        }
        var getAppMobileNo=function(){
            return user.appMobileNo;
        }
        var setAppPwd=function(pwd){
            user.appPwd=pwd;
        }
        var getAppPwd=function(){
            return user.appPwd;
        }
        var setIdenTypeId=function(id){
            user.idenTypeId=id;
        }
        var getIdenTypeId=function(){
            return user.idenTypeId;
        }
        var getAppUserId=function(){
            return user.appUserId;
        }
        var setAppUserId=function(userId){
            user.appUserId=userId;
        }
        return {
            setAppMobileNo :setAppMobileNo,
            getAppMobileNo:getAppMobileNo,
            setAppPwd:setAppPwd,
            getAppPwd:getAppPwd,
            setIdenTypeId:setIdenTypeId,
            getIdenTypeId:getIdenTypeId,
            getAppUserId:getAppUserId,
            setAppUserId:setAppUserId
        }
    }])
    /**
     * Create by Alvin 3/1/2016 user login service
     * */
    .factory('loginService', ["$q", "$http",function($q, $http, $response){
        var userLoginRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login&appMobileNo="+mobileNo+"&appPwd="+pwd)
            //alert("the post data info is : " + tranjsontoparam(postData));
            $http({
                method: 'POST',
                url:  getUrlByKey('login'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
            // .success(function () {});
            //
            //$http.post("http://9.125.151.114:8080/LDDataServer/?action=User&cmd=login",postData)
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        //alert(result.code);
                        // alert("user app id"+result.data[1].app_User_Id);
                        //alert("user data==============="+result);
                        //alert("user  user id info==============="+result.app_user_id);
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+result.message);
                   // alert("服务器异常");
                    ons.notification.alert({
                        title: "温馨提示",
                        buttonLabel:"确定",
                        message: "服务器异常"
                    });
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            userLoginRequests: userLoginRequests
        };
    }])

    /**
     * Create by John  重置密码
     *
     */
    .factory('resetPassWordService', ["$q", "$http",function($q, $http, $response){
        var resetPwdLoginRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url:  getUrlByKey('resetPwdLoginURL'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
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
                    ons.notification.alert({
                        title: "温馨提示",
                        buttonLabel:"确定",
                        message: "服务器异常"
                    });
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            resetPwdLoginRequests: resetPwdLoginRequests
        };
    }])


/**
 *
 * send short message with code to user mobile
 * */
    .factory('sendMessageService', ["$q", "$http",function($q, $http, $response){
        var sendMessageRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url:  'http://106.ihuyi.cn/webservice/sms.php?method=Submit',//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            }).success(function(result){
                        deferred.resolve(result);
                })
                .error(function(error){
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return  promise;
        }
        return {
            sendMessageRequests: sendMessageRequests
        };
    }])



    /**
     * Steven sign up page.
     */
    .factory('getUserRegDetailService', ["$q", "$http", function($q, $http, $response){
        var userRegInfo={appMobileNo:'',appPwd:'',roleType:'', appName:'', zoneID:'', detailAddress:'',auth_code:""};
        //var getAppMobileNo=function(){
        //    return userRegInfo.appMobileNo;
        //}

        var setAppMobileNo=function(mobileNo){
            userRegInfo.appMobileNo=mobileNo;
        }
        var getAppMobileNo=function(){
            return userRegInfo.appMobileNo;
        }
        var setAppPwd=function(pwd){
            userRegInfo.appPwd=pwd;
        }
        var getAppPwd=function(){
            return userRegInfo.appPwd;
        }
        var setRoleType=function(role){
            userRegInfo.roleType=role;
        }
        var getRoleType=function(){
            return userRegInfo.roleType;
        }

        var setAppName=function(appName){
            userRegInfo.appName=appName;
        }
        var getAppName=function(){
            return userRegInfo.appName;
        }

        var setZoneID=function(zoneID){
            userRegInfo.zoneID=zoneID;
        }
        var getZoneID=function(){
            return userRegInfo.zoneID;
        }
        var setDetailAddress=function(detailAddress){
            userRegInfo.detailAddress=detailAddress;
        }
        var getDetailAddress=function(){
            return userRegInfo.detailAddress;
        }
        var setAuthCode=function(code){
            userRegInfo.auth_code = code;
        }
        var getAuthCode=function(code){
            return userRegInfo.auth_code ;
        }
        return {
            setAppMobileNo :setAppMobileNo,
            getAppMobileNo:getAppMobileNo,
            setAppPwd:setAppPwd,
            getAppPwd:getAppPwd,
            setRoleType:setRoleType,
            getRoleType:getRoleType,
            setAppName:setAppName,
            getAppName:getAppName,
            setZoneID:setZoneID,
            getZoneID:getZoneID,
            setDetailAddress:setDetailAddress,
            getDetailAddress:getDetailAddress,
            setAuthCode:setAuthCode,
            getAuthCode:getAuthCode

            //tag
        }
    }])


    /**
     * Create by John 3/2/2016 user sign up service
     * */
    .factory('signUpService', ["$q", "$http", function($q, $http, $response){
        var userSignUpRequests = function(postData){
           // var postData = {appMobileNo,appPwd,roleType, appName, zoneID, detailAddress};
            var deferred = $q.defer();
            var promise = deferred.promise;
            //alert("signUpService" +
            //    " the user mobile no is : "+ appMobileNo+
            //    " and the pwd is : " + appPwd +
            //    " the appName is : " + appName +
            //    " the zoneID is : " + zoneID +
            //    " the detailAddress is : " + detailAddress +
            //    " the RoleType is : " + roleType );

            $http({
                method: 'POST',
                url: getUrlByKey('signUpUrl'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=register',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                //data: tranjsontoparam(postData)
                data: postData
            })


            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=register",{app_Mobile_No:appMobileNo,app_Pwd:appPwd,
            //        app_User_Name:appName,iden_Type_Id:roleType, zone_Id:zoneID,cust_Addr:detailAddress
            //})


                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result);
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
            userSignUpRequests: userSignUpRequests
        };
    }])

    /**
     * Check Mobile Service
     */
    .factory('CheckMobileService', ["$q", "$http", function($q, $http, $response){
        var checkMobileRequests = function(postData){
            // var postData = {appMobileNo,appPwd,roleType, appName, zoneID, detailAddress};
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http({
                method: 'POST',
                url: getUrlByKey('checkMobileUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
            .success(function(result){

                    deferred.resolve(result.code);

                })
                .error(function(error){
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return  promise;


        }
        return {
            checkMobileRequests: checkMobileRequests
        };
    }])
    .factory('versionService', ["$q", "$http",function($q, $http, $response){
        var services={};
        var new_version_download_alert_flag='0';

        services.getVersionDownloadAlertFlag=function(){
            return new_version_download_alert_flag;
        }
        services.setVersionDownloadAlertFlag=function(flag){
            new_version_download_alert_flag= flag;
        }

        services.checkNewVersionRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login&appMobileNo="+mobileNo+"&appPwd="+pwd)
            //alert("the post data info is : " + tranjsontoparam(postData));
            $http({
                method: 'POST',
                url:  getUrlByKey('checkNewVersion'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
            // .success(function () {});
            //
            //$http.post("http://9.125.151.114:8080/LDDataServer/?action=User&cmd=login",postData)
                .success(function(result){
                    if(angular.equals("1",result.code)) {
                        //alert(result.code);
                        // alert("user app id"+result.data[1].app_User_Id);
                        //alert("user data==============="+result);
                        //alert("user  user id info==============="+result.app_user_id);
                        deferred.resolve(result.url);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //alert("http get error "+result.message);
                    // alert("服务器异常");
                    //ons.notification.alert({
                    //    title: "温馨提示",
                    //    buttonLabel:"确定",
                    //    message: "服务器异常"
                    //});
                    deferred.reject(error);
                });
            return  promise;
        }
        return  services;
    }])







