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
    Tool.createBox = function (x, y, w, h, color) {
        var box = new egret.Shape();
        box.x = x;
        box.y = y;
        box.graphics.beginFill(color, 1);
        box.graphics.drawRect(0, 0, w, h);
        box.graphics.endFill();
        return box;
    };
    return Tool;
}(egret.DisplayObjectContainer));
__reflect(Tool.prototype, "Tool");
//# sourceMappingURL=Tool.js.map