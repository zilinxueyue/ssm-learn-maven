/**
 * Created by Alvin on 6/21/2016.
 *
 *
 */
angular.module('salehomeModule',['ui.bootstrap'])
    .controller("salehomeContrl",['$scope','$modal','postService','$httpParamSerializerJQLike',function($scope,$modal,postService,$httpParamSerializerJQLike){

        $scope.currentPage=1;

        $scope.backstyle = "cyan";

        $scope.postTest= function(){
            //var url='http://127.0.0.1:8080/login/jsontest.do';

            var url= "http://9.125.151.62:8080/ldshop/json/add.do";
            var user={id:1,username:'hello',password:'123456',state:'state',createTime:new Date()};
            var data={id:1,name:'Jack',hoby:['a','b','c' ],list:{l1:['l11','l12'],l2:['l21','l22']},array:[{aid:1,aname:"array1"},{aid:2,aname:"array2"}]};
            var postData={
                userName: "nametest",
                    password: "pass"
            };
            postService.getTestRequest(url, data).then(function (result) {
                 console.log(result);

            }, function (error) {

            }, function (progress) {

            });

        }

        $scope.showalert=function(){
                 console.log("asfd");
                 var data={id:1,name:'Jack',hoby:[a,b,c ],list:{l1:[l11,l12],l2:[l21,l22]}};



               };

        $scope.showpage = function(page){
           alert(page);
            $scope.currentPage=page;
        };

        $scope.items = ['html5','jq','FE-演示平台','平台'];
        $scope.open = function(size){  //打开模态
            var modalInstance = $modal.open({
                templateUrl : 'page/common/myModelContent.html',  //指向上面创建的视图
                controller : 'ModalInstanceCtrl',// 初始化模态范围
                size : size, //大小配置
                resolve : {
                    items : function(){
                        return $scope.items;
                    }
                }
            })
            modalInstance.result.then(function(selectedItem){
                $scope.selected = selectedItem;

            },function(){
                console.log('Modal dismissed at: ' + new Date())
            })
        }

    }])
    .controller('ModalInstanceCtrl',function($scope,$modalInstance,items){ //依赖于modalInstance
    $scope.items = items;
    $scope.selected = {
        item : $scope.items[0]
    };
    $scope.ok = function(){
        $modalInstance.close($scope.selected.item); //关闭并返回当前选项
    };
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel'); // 退出
    }
})
