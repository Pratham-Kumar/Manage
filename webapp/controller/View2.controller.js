sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (BaseController, UIComponent) {
    "use strict";

    return BaseController.extend("com.sap.manage.controller.View2", {
        onInit() {
            let oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("myView2Route").attachPatternMatched(this._getMatchedRoute, this);
        },

        _getMatchedRoute: function (oEvent) {
            let ProductID = oEvent.getParameters().arguments.value1;
            let sPath = `/ProductSet('${ProductID}')`;
            this.getView().bindElement(sPath);
        }
    });
});
