"use strict";

angular.module('pxMenu').directive('pxMenu', function () {
  return {
    transclude: true,
    templateUrl: 'ext-modules/pxMenu/pxMenuTemplate.html',
    controller: 'pxMenuController',
    link: function (scope, el, attr) {
      
    }
  };
});