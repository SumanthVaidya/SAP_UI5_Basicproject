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
            var ip1=oView.byId("ip1");
            var ip2=oView.byId("ip2");
            if(ip1.getValue()!="Sumanth"){
                MessageToast.show("Invalid username")
            }
            else{
            if(ip2.getValue()=="Accen@1122" && ip1.getValue()=="Sumanth"){
            MessageToast.show("Logged In Successfully");
            oRoute.navTo("Routesecondpage");
            }
            else{
                MessageToast.show("Invalid Password");
            }  
        }
        },
        onreset: function(){
            var oView=this.getView();
            oView.byId("ip1").setValue(null);
            oView.byId("ip2").setValue(null);
        }

    });
});