/**
 * Created by Administrator on 2016/3/19.
 */
//实例化AngularJS应用程序对象
var app = angular.module('myApp', []);
//创建控制器
app.controller('myCtrl', function ($scope) {

    $scope.goods = [
        {bool:false,name:'女装',price:'99.00',num:2},
        {bool:false,name:'男鞋',price:'87.00',num:1},
        {bool:false,name:'娃娃衣',price:'39.00',num:3}
    ];

    //全选按钮是否被选中
    $scope.allSelectButton = false;

    /**autoSelect自动勾选函数：
     * 1.全部商品按钮都被选中了，自动勾选全选按钮；
     * 2.有没被选中的，自动删除勾选全选按钮
     * */
    $scope.autoSelect = function () {
        //listBool数组存储每一个商品是否被选中的布尔值
        var listBool = [];
        angular.forEach($scope.goods, function (data,index,array) {
            //如果被选中，才放进listBool数组中
            if(data.bool) {
                listBool.push(data.bool);
            }
        });

        //console.log(listBool.length);
        //console.log($scope.goods.length);

        //所有的都被选中
        if(listBool.length == $scope.goods.length) {
            $scope.allSelectButton = true;
        }else if(listBool.length != $scope.goods.length) {
            //有没被选中的，自动删除勾选全选按钮
            $scope.allSelectButton = false;
        }
    };


    //点击全选按钮，实现全选功能或者全不选
    $scope.allSelect = function () {
        //console.log($scope.allSelectButton);
        if($scope.allSelectButton) {
            angular.forEach($scope.goods, function (data,index,array) {
                data.bool = true;
            });
        }

        if(!$scope.allSelectButton) {
            angular.forEach($scope.goods, function (data,index,array) {
                data.bool = false;
            });
        }
    };

    //添加商品
    $scope.addGoods = function () {
        //console.log($scope.newName);
        //console.log($scope.newPrice);
        //console.log($scope.newNum);

        if($scope.newName != null && $scope.newName != '' && $scope.newName != 'undefined'
        && $scope.newPrice != null && $scope.newPrice != '' && $scope.newPrice != 'undefined'
        && $scope.newNum != null && $scope.newNum != '' && $scope.newNum != 'undefined'
        ) {
            $scope.goods.push({bool:false,name:$scope.newName,price:$scope.newPrice,num:$scope.newNum});
            //清空输入框数据
            $scope.newName = '';
            $scope.newPrice = '';
            $scope.newNum = '';
        }else {
            alert('请填写相应数据');
        }
    };

    /**删除商品*/
    var deleteGoods = [];
    var oldGoodsArr = $scope.goods;
    $scope.deleteGoods = function () {
        angular.forEach($scope.goods, function (data,index,arr){
            //console.log(data.bool);

            if(arr[index].bool) {
                deleteGoods.push(data.bool + index);

                //$scope.goods.splice(index, 1);
                //console.log($scope.goods);
            }


        });

        //console.log(deleteGoods);

        for(var n = 0;n < deleteGoods.length;n++){
            $scope.goods.splice((deleteGoods[n] - 1 -n),1);

            //console.log(deleteGoods[n] - 1);
        }

        //console.log(deleteGoods.length);
        //console.log(oldGoodsArr.length);

        if(oldGoodsArr.length == 0) {
            //alert('aaa');
            $scope.allSelectButton = false;
        }
    };


});




















