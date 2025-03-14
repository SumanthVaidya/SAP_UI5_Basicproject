sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("techleapproj.controller.employeedetails", {
        onInit() {
        },
        onback: function(){
            var oRoute1=sap.ui.core.UIComponent.getRouterFor(this);
            oRoute1.navTo("Routesecondpage");
        },
        onlogout: function(){
            var oRoute1=sap.ui.core.UIComponent.getRouterFor(this);
            oRoute1.navTo("Routeview1");
        }
    });
});