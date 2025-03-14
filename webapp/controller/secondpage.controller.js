sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("techleapproj.controller.secondpage", {
        onInit() {
        },
        onempdetails: function(){
            var oRoute1=sap.ui.core.UIComponent.getRouterFor(this);
            oRoute1.navTo("Routeemployeedetails");
        },
        onprod: function(){
            var oRoute1=sap.ui.core.UIComponent.getRouterFor(this);
            oRoute1.navTo("Routeproductdetails");
        },
        onsales: function(){
            var oRoute1=sap.ui.core.UIComponent.getRouterFor(this);
            oRoute1.navTo("Routesalesdetails");
        }
    });
});