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
var pocker = (function (_super) {
    __extends(pocker, _super);
    function pocker() {
        var _this = _super.call(this) || this;
        _this.isClick = true;
        return _this;
        // this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);	
    }
    pocker.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    pocker.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.pokerBackImg.scaleX = 1;
        this.pokerFrontImg.scaleX = 0;
    };
    pocker.prototype.pokerClick = function () {
        var _this = this;
        Data.isPockerClick = true;
        egret.Tween.get(this.pokerBackImg).to({ scaleX: 0 }, 200, egret.Ease.backIn).call(function () {
            egret.Tween.get(_this.pokerFrontImg).to({ scaleX: 1 }, 200, egret.Ease.backOut);
        });
    };
    pocker.prototype.addEvent = function () {
        this.pokerBackImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pokerClick, this); //添加点击事件回调click方法
    };
    pocker.prototype.removeEvent = function () {
        this.pokerBackImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pokerClick, this);
    };
    pocker.prototype.initialize = function () {
        this.pokerBackImg.scaleX = 1;
        this.pokerFrontImg.scaleX = 0;
    };
    return pocker;
}(eui.Component));
__reflect(pocker.prototype, "pocker", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=pocker.js.map