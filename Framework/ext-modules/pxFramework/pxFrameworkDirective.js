"use strict";

angular.module("pxFramework").directive("pxFramework", function () {
  return {
    transclude: true,
    scope: {
      title: '@',
      subtitle: '@',
      iconFile: '@'
    },
    controller: "pxFrameworkController",
    templateUrl: "ext-modules/pxFramework/pxFrameworkTemplate.html"
  };
});