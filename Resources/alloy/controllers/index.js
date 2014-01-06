function Controller() {
    function clickLobster() {
        alert("Lobster!");
    }
    function clickHelvetica() {
        alert("Helvetica!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 24,
            fontFamily: "Lobster 1.3"
        },
        text: "Lobster Alloy custom fonts!",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    clickLobster ? $.__views.label.addEventListener("click", clickLobster) : __defers["$.__views.label!click!clickLobster"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 24,
            fontFamily: "Helvetica 25 Ultra Light"
        },
        text: "Helvetica Alloy custom fonts!",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    clickHelvetica ? $.__views.label.addEventListener("click", clickHelvetica) : __defers["$.__views.label!click!clickHelvetica"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label!click!clickLobster"] && $.__views.label.addEventListener("click", clickLobster);
    __defers["$.__views.label!click!clickHelvetica"] && $.__views.label.addEventListener("click", clickHelvetica);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;