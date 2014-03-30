
    var phonecatApp = angular.module('phonecatApp.controllers', [])
     .controller('ProductListCtrl', function ($scope, ProductsAPIService) {
    
         
   
    $scope.name = "World";
    $scope.rows=[1];
    $scope.productList={};
    $scope.update = function(){
            $scope.rows.reverse();
    }
    $scope.orderProp = "productName";
    ProductsAPIService.getProducts().success(function(response){
        $scope.productList=response.results;
        var count=0;
        var colcount=0;
        var rowData =[1];
        for(var x=0 ;x< $scope.productList.length ; x++)
        {
            
            if (x == 0 || x%4 != 0)
            {
                 rowData[colcount]=$scope.productList[x];
                 colcount++;
            }
            else 
            {
                $scope.rows[count] =rowData;
                rowData =[];
                colcount=0;
                rowData=[1];
                rowData[0]=$scope.productList[x];
                colcount++;
                count++;
            }
        }
        $scope.rows.reverse();
    })
    .error(function(_,status){
        alert("Fail:status = "+ status);
    });
     
    });
