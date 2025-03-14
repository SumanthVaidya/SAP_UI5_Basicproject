sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("techleapproj.controller.View1", {
        onInit() {
        },
        onlogin: function(){
            var oView=this.getView();
            var oRoute=sap.ui.core.UIComponent.getRouterFor(this);
            var ip=oView.byId("ip2");
            if(ip.getValue()=="Accen@1122"){
            MessageToast.show("Logged In Successfully");
            oRoute.navTo("Routesecondpage");
            }
            else{
                MessageToast.show("Invalid Password");
            }  
        }
    });
});