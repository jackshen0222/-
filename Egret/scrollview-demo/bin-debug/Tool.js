var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Tool = (function (_super) {
    __extends(Tool, _super);
    function Tool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tool.createBox = function (a, b, c, d) {
        var box = new egret.Shape;
        box.graphics.beginFill(0xff0000);
        box.graphics.drawRect(a, b, c, d);
        return box;
    };
    return Tool;
}(egret.DisplayObjectContainer));
__reflect(Tool.prototype, "Tool");
//# sourceMappingURL=Tool.js.map