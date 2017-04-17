(function(window) {
    window.angular.module('selectApp', ['ui.select']);

    window.angular.module('selectApp').controller('selectController', ['$scope','$timeout', function($scope,$timeout) {
        $scope.selectAsync = {selected:'杭州市'}
        $scope.selectList = [] ;
        $timeout(function () {

            $scope.selectList = [{
            id: 1,
            value: '北京市'
        }, {
            id: 2,
            value: '天津市'
        }, {
            id: 3,
            value: '河北省'
        }, {
            id: 4,
            value: '山西省'
        }, {
            id: 5,
            value: '内蒙古自治区'
        }, {
            id: 6,
            value: '辽宁省'
        }, {
            id: 7,
            value: '吉林省'
        }, {
            id: 8,
            value: '黑龙江省'
        }, {
            id: 9,
            value: '上海市'
        }, {
            id: 10,
            value: '江苏省'
        }, {
            id: 11,
            value: '浙江省'
        }, {
            id: 12,
            value: '安徽省'
        }, {
            id: 13,
            value: '福建省'
        }, {
            id: 14,
            value: '江西省'
        }, {
            id: 15,
            value: '山东省'
        }, {
            id: 16,
            value: '河南省'
        }, {
            id: 17,
            value: '湖北省'
        }, {
            id: 18,
            value: '湖南省'
        }, {
            id: 19,
            value: '广东省'
        }, {
            id: 20,
            value: '广西壮族自治区'
        }, {
            id: 21,
            value: '海南省'
        }, {
            id: 22,
            value: '重庆市'
        }, {
            id: 23,
            value: '四川省'
        }, {
            id: 24,
            value: '贵州省'
        }, {
            id: 25,
            value: '云南省'
        }, {
            id: 26,
            value: '西藏自治区'
        }, {
            id: 27,
            value: '陕西省'
        }, {
            id: 28,
            value: '甘肃省'
        }, {
            id: 29,
            value: '青海省'
        }, {
            id: 30,
            value: '宁夏回族自治区'
        }, {
            id: 32,
            value: '台湾省'
        }, {
            id: 33,
            value: '香港特别行政区'
        }, {
            id: 34,
            value: '澳门特别行政区'
        }]
        },1000)

    }]).filter('propsFilter', function() {
        return function(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    });


})(window)
