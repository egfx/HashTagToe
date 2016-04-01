module.exports = function(){
    return {
        restrict: 'A',
        link: function (scope, element, attr){
            element.bind('mouseenter', function(evt){
                var $el = angular.element(evt.target).find('.hint-' + attr.direction);
                if($el.length){
                    angular.element($el).addClass('hint-persist');
                }
            }).bind('mouseleave', function(evt){
                var $el = angular.element(evt.target).find('.hint-' + attr.direction);
                if($el.length){
                    angular.element($el).removeClass('hint-persist');
                    $el = null;
                }
            });

            angular.element('.app-folders-container').on('mouseleave', function(evt){
                angular.element('.app-folders-container').find('.hint-' + attr.direction).removeClass('hint-persist');
            });
        }
    }
};