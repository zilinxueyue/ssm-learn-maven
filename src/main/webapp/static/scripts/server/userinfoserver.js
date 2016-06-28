/**
 * Created by John on 3/8/2016.
 */

angular.module('useridserver', ['onsen','appUiRouteModule'])

    .factory('getUserInfoService', ["$q", "$http", function($q, $http, $response){
        /* String	app_user_id
         String	app_mobile_no
         String	app_user_name
         String	iden_type_id
         String	iden_type_code
         String	zone_id
         String	cust_addr
         String	cust_postcode
         String	cust_email
         String	cust_qq
         String	crop_no
         String	app_vip_flag
         String	card_no
         String	user_pic_path
         List	card_pic_path
         List	cert_pic_path
         *
        * */
        var services={};
        var isloginflag='';
        var UserInfo={app_user_id:'',app_mobile_no:'',app_user_name:'',iden_type_id:'',iden_type_code:'',zone_id:'',cust_addr:'',
            cust_postcode:'',cust_email:'',cust_qq:'',crop_no:'',app_vip_flag:'',card_no:'',user_pic_path:'',max_user_pic_path:'',
            card_pic_path:[],cert_pic_path:[],landadd_pic_path:[],forum_expert_value:'',user_pwd:''
        };

        services.cleanAllUserServiceInfo=function(){
            var isloginflag='';
            var UserInfo={app_user_id:'',app_mobile_no:'',app_user_name:'',iden_type_id:'',iden_type_code:'',zone_id:'',cust_addr:'',
                cust_postcode:'',cust_email:'',cust_qq:'',crop_no:'',app_vip_flag:'',card_no:'',user_pic_path:'',max_user_pic_path:'',
                card_pic_path:[],cert_pic_path:[],landadd_pic_path:[],forum_expert_value:'',user_pwd:''
            };
        }



        services.setForum_Expert_Value=function(forum_expert_value) {
            UserInfo.forum_expert_value = forum_expert_value;
        }
        services.getForum_Expert_Value= function() {
            return UserInfo.forum_expert_value;
        }

        services.setIsLoginFlag=function(flag){
            isloginflag=flag;
        }
        services.getIsLoginFlag=function(){
            return isloginflag;
        }
        services.setUser_pic_path =function(path){
            UserInfo.user_pic_path=path;
        }
        services.getUser_pic_path=function(){
            return UserInfo.user_pic_path;
        }


        services.setMax_user_pic_path =function(path){
            UserInfo.max_user_pic_path=path;
        }
        services.getMax_user_pic_path=function(){
            return UserInfo.max_user_pic_path;
        }



        services.getApp_user_id= function() {
            return UserInfo.app_user_id;
        }
        services.setApp_user_id=function(app_user_id) {
            UserInfo.app_user_id = app_user_id;
        }
        services.getApp_user_name= function() {
            return UserInfo.app_user_name;
        }
        services.setApp_user_name=function(app_user_name) {
            UserInfo.app_user_name = app_user_name;
        }
        services.getApp_vip_flag= function() {
            return UserInfo.app_vip_flag;
        }
        services.setApp_vip_flag=function(app_vip_flag) {
            UserInfo.app_vip_flag = app_vip_flag;
        }
        services.getCard_no= function() {
            return UserInfo.card_no;
        }
        services.setCard_no=function(card_no) {
            UserInfo.card_no = card_no;
        }
        services.getCode= function() {
            return UserInfo.code;
        }
        services.setCode=function(code) {
            UserInfo.code = code;
        }
        services.getCrop_no= function() {
            return UserInfo.crop_no;
        }
        services.setCrop_no=function(crop_no) {
            UserInfo.crop_no = crop_no;
        }
        services.getCust_addr= function() {
            return UserInfo.cust_addr;
        }
        services.setCust_addr=function(cust_addr) {
            UserInfo.cust_addr = cust_addr;
        }
        services.getCust_email= function() {
            return UserInfo.cust_email;
        }
        services.setCust_email=function(cust_email) {
            UserInfo.cust_email = cust_email;
        }
        services.getCust_postcode= function() {
            return UserInfo.cust_postcode;
        }
        services.setCust_postcode=function(cust_postcode) {
            UserInfo.cust_postcode = cust_postcode;
        }
        services.getCust_qq= function() {
            return UserInfo. cust_qq;
        }
        services.setCust_qq=function(cust_qq) {
            UserInfo.cust_qq = cust_qq;
        }
        services.getIden_type_id= function() {
            return UserInfo.iden_type_id;
        }
        services.setIden_type_id=function(iden_type_id) {
            UserInfo.iden_type_id = iden_type_id;
        }
        services.getZone_id= function() {
            return UserInfo. zone_id;
        }
        services.setZone_id=function(zone_id) {
            UserInfo.zone_id = zone_id;
        }

        services.getApp_mobile_no= function() {
            return UserInfo. app_mobile_no;
        }
        services.setApp_mobile_no=function(app_mobile_no) {
            UserInfo.app_mobile_no = app_mobile_no;
        }
        services.getIden_type_code =function() {
            return UserInfo.iden_type_code;
        }
        services.setIden_type_code=function(iden_type_code) {
            UserInfo.iden_type_code = iden_type_code;
        }
        services.setCard_pic_path=function(paths){
            UserInfo.card_pic_path = paths;
        }
        services.getCard_pic_path=function(){
            return UserInfo.card_pic_path ;
        }

        services.setCert_pic_path= function (paths) {
            UserInfo.cert_pic_path= paths;
        }
        services.getCert_pic_path=function() {
            return   UserInfo.cert_pic_path;
        }
        services.setlandadd_pic_path= function (paths) {
            UserInfo.landadd_pic_path= paths;
        }
        services.getlandadd_pic_path=function() {
            return   UserInfo.landadd_pic_path;
        }


        services.getUser_pwd= function() {
            return UserInfo. user_pwd;
        }
        services.setUser_pwd=function(user_pwd) {
            UserInfo.user_pwd = user_pwd;
        }


        return services;


        //return {
        //    getApp_user_id:getApp_user_id,
        //    getApp_user_name:getApp_user_name,
        //    getApp_vip_flag:getApp_vip_flag,
        //    getCard_no:getCard_no,
        //    getCode:getCode,
        //    getCrop_no:getCrop_no,
        //    getCust_addr:getCust_addr,
        //    getCust_email:getCust_email,
        //    getCust_postcode:getCust_postcode,
        //    getCust_qq:getCust_qq,
        //    getIden_type_id:getIden_type_id,
        //    getZone_id:getZone_id,
        //    setApp_user_id:setApp_user_id,
        //    setApp_user_name:setApp_user_name,
        //    setApp_vip_flag:setApp_vip_flag,
        //    setCard_no:setCard_no,
        //    setCode:setCode,
        //    setCrop_no:setCrop_no,
        //    setCust_addr:setCust_addr,
        //    setCust_email:setCust_email,
        //    setCust_postcode:setCust_postcode,
        //    setCust_qq:setCust_qq,
        //    setIden_type_id:setIden_type_id,
        //    setZone_id:setZone_id,
        //    getApp_mobile_no:getApp_mobile_no,
        //    getIden_type_code:getIden_type_code,
        //    setApp_mobile_no:setApp_mobile_no,
        //    setIden_type_code:setIden_type_code,
        //    setCard_pic_path:setCard_pic_path,
        //    getCard_pic_path:getCard_pic_path,
        //    setCert_pic_path:setCert_pic_path,
        //    getCert_pic_path:getCert_pic_path,
        //
        //    setlandadd_pic_path:setlandadd_pic_path,
        //    getlandadd_pic_path:getlandadd_pic_path
        //
        //}



    }])


    /**
     * Create by John 3/1/2016  get user type
     * */
    .factory('userInfoService', ["$q", "$http",function($q, $http, $response){
        var getUserType = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
           // var postData = {userId:$scope.appMobileNo};
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login&appMobileNo="+mobileNo+"&appPwd="+pwd)
          //  alert("the post data info is : " + postData);
            $http({
                method: 'POST',
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getUserType',
                //getUrlByKey('replyChartDetail'),
                url: getUrlByKey('getUserTypeInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })

            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=User&cmd=getUserType",postdata)
                .success(function(result){
                    if(angular.equals("1",result.code)) {

                        // alert("user app id"+result.data[1].app_User_Id);
                        //alert("user app id==============="+result.data);
                        //alert("user app id"+result.data.getAppUserId());
                        //alert("user app id"+result.data['app_User_Id']);
                        //alert("User Type: " + result.data.getUser_Type());//用户获取user的user type
                        //alert("User ID: " + result.data.getUser_Id_Info());//用户获取user的user Id info
                      //  console.log("user ID : " + result.data.app_user_id );
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
            userLoginRequests: userLoginRequests
        };
    }])






