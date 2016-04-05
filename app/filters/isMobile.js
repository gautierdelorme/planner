angular.module('planner').filter('isMobile', isMobile);

function isMobile ($mdMedia) {
  return function(then, otherwise) {
    return $mdMedia('gt-sm') ? then : otherwise
  }
}
