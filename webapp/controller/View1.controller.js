sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.sap.manage.controller.View1", {
            onInit: function () {

            },

            onFilterProducts: function (oEvent) {
                // build filter array
                var aFilter = [], sQuery = oEvent.getParameter("query"),
                    // retrieve list control
                    oList = this.getView().byId("table1"),
                    // get binding for aggregation 'items'
                    oBinding = oList.getBinding("items");

                if (sQuery) {
                    aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
                }

                // apply filter. an empty filter array simply removes the filter
                // which will make all entries visible again
                oBinding.filter(aFilter);
            },

            onPress: function () {
                this.getOwnerComponent().getRouter().navTo("myView2Route");
            },

            onPressRow: function (oEvent) {
                let selectedRow = oEvent.getSource().getBindingContext().getObject();
                this.getOwnerComponent().getRouter().navTo("myView2Route", {
                    "value1": selectedRow.ProductID
                });
            },
            onFormatPrice: function (price) {
                if (price < 500) {
                    return "Success";
                }
                else {
                    return "Error";
                }
            }
        });
    });
