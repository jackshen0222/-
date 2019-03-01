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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        var imgeLoader = new egret.ImageLoader;
        imgeLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgeLoader.load("resource/assets/timg.jpg");
    };
    Main.prototype.imgLoadHandler = function (e) {
        var bmd = e.currentTarget.data;
        var img = new egret.Bitmap();
        img.x = 100;
        img.y = 100;
        this.addChild(img);
        img.anchorOffsetX = 0;
        img.anchorOffsetY = 0;
        img.x = this.stage.stageWidth * .5;
        img.y = this.stage.stageHeight * .5;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            img.x = e.localX;
            img.y = e.localY;
        }, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map