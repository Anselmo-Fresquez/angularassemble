"use strict";

/// AngularApplication.js by Anselmo Fresquez III
/// 8.4.2015
/// Basically what this does is accumulate the desired names of modules, directives and controllers 
/// from all of the calls to AddModule, AddModuleController and AddModuleDirective as well as references
/// to the functions and objects that define their behavior. 
/// When all of the references are accumulated, the user is expected to call Assemble() in order to 
/// add all of the modules and controllers to angular. As long as all of this is done before Angular
/// goes through and compiles all of its code, it will work perfectly fine.

class AngularApplication {
  constructor(mainModuleName, includedModules) {
    this.Initialized  = false;
    this.Modules      = [];
    this.Controllers  = [];
    this.Directives   = [];

    this.MainModuleName  = mainModuleName;
    this.IncludedModules = includedModules;

    return this;
  }

  Assemble () {
    this.AttachAngularModule(this.MainModuleName, this.IncludedModules);

    for (var i = 0, len = this.Modules.length; i < len; i++) {
      this.AttachAngularModule(this.Modules[i].ModuleName, this.Modules[i].IncludedModules);
      console.log("Module \"" + this.Modules[i].ModuleName + "\" created.");
    }

    for (var i = 0, len = this.Controllers.length; i < len; i++) {
      this.AttachAngularController(this.Controllers[i].ModuleName, this.Controllers[i].ControllerName, this.Controllers[i].ControllerFunction);
      console.log("Controller \"" + this.Controllers[i].ControllerName + "\" added to Module \"" + this.Controllers[i].ModuleName + "\"");
    }

    for (var i = 0, len = this.Directives.length; i < len; i++) {
      this.AttachAngularDirective(this.Directives[i].ModuleName, this.Directives[i].DirectiveName, this.Directives[i].Directive);
      console.log("Directive \"" + this.Directives[i].DirectiveName + "\" added to Module \"" + this.Directives[i].ModuleName + "\"");
    }
    
    console.log("Application \"" + this.MainModuleName + "\" assembled.");
  }

  AttachAngularModule(moduleName, includedModules) {
    var module = angular.module(moduleName, includedModules);
    return module;
  }

  AttachAngularController(moduleName, controllerName, controllerFunction) {
    var controller = angular.module(moduleName).controller(controllerName, controllerFunction);
    return controller;
  }

  AttachAngularDirective(moduleName, directiveName, directive) {
    var directive = angular.module(moduleName).directive(directiveName, directive);
    return directive;
  }

  BuildModule (moduleName, dependencies, controllerName, controller, directiveName, directive) {
    this.AddModule(moduleName, dependencies);
    this.AddModuleController(moduleName, controllerName, controller);    
    this.AddModuleDirective(moduleName, directiveName, directive);
  }

  AddModule (moduleName, includedModules) { 
    for (var i = 0, len = this.Modules.length; i < len; i++) {
      if (this.Modules[i].ModuleName == moduleName) {
        console.log("Module \"" + moduleName + "\" already exists for Module \"" + moduleName + "\"");   
        return;
      }
    }

    this.Modules.push({ModuleName: moduleName, IncludedModules: includedModules});
  }

  AddModuleDirective (moduleName, directiveName, directive) {
    for (var i = 0, len = this.Directives.length; i < len; i++) {
      if (this.Directives[i].DirectiveName == directiveName) {
        console.log("Directive \"" + directiveName + "\" already exists for Module \"" + moduleName + "\"");   
        return;
      }
    }

    this.Directives.push({ModuleName: moduleName, DirectiveName: directiveName, Directive: directive});
  }

  AddModuleController (moduleName, controllerName, controllerFunction) {
    for (var i = 0, len = this.Controllers.length; i < len; i++) {
      if (this.Controllers[i].ControllerName == controllerName) {
        console.log("Controller \"" + controllerName + "\" already exists for Module \"" + moduleName + "\"");   
        return;
      }
    }

    this.Controllers.push({ModuleName: moduleName, ControllerName: controllerName, ControllerFunction: controllerFunction});
  }
}