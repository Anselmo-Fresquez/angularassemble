///
/// Module Summary
///

(function() {

  var ModuleName     = "TestModule";
  var Dependencies   = [];
  var ControllerName = "TestModuleController";
  var DirectiveName  = "test";

  function Controller () {

  }

  var Directive = function () {
    return {
      controller: "TestModuleController",
      templateUrl: "test.html"
    };
  };

  Application.BuildModule(
    ModuleName, 
    Dependencies, 
    ControllerName, 
    Controller, 
    DirectiveName,
    Directive
  );
}());