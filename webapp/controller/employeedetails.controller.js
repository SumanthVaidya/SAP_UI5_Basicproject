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
            var oRoute2=sap.ui.core.UIComponent.getRouterFor(this);
            oRoute2.navTo("RouteView1");
            oview=View1.getView();
            oview.byId("ip1").setValue(null);
            oview.byId("ip2").setValue(null);
        
        }
    });
});