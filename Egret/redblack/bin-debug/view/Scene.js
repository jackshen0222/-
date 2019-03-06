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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.count = 12;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "resource/scene.exml";
        return _this;
    }
    Scene.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Scene.prototype.onComplete = function () {
        this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginClick, this); //绑定点击事件
        this.endBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.endClick, this);
        this.openTextGroup.addEventListener(egret.Event.ENTER_FRAME, this.isClick, this);
    };
    //初始化卡牌参数
    Scene.prototype.beginClick = function () {
        this.openTextGroup.alpha = 1;
        this.timeGroup.alpha = 1;
        this.timer = new egret.Timer(1000, 12);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.timer.start();
        this.pockerOne.addEvent();
        this.pockerTwo.addEvent();
        this.beginBtn.enabled = false;
    };
    Scene.prototype.endClick = function () {
        Data.isPockerClick = false;
        this.promptFunc();
        this.timer.reset(); //如果时间计时未开始，报错
        this.resetCount();
        this.openTextGroup.alpha = 0;
        this.timeGroup.alpha = 0;
        this.pockerOne.initialize();
        this.pockerTwo.initialize();
        this.pockerOne.removeEvent();
        this.pockerTwo.removeEvent();
        this.beginBtn.enabled = true;
    };
    Scene.prototype.promptFunc = function () {
        var _this = this;
        egret.Tween.get(this.prompt).to({ scaleX: 1, scaleY: 1 }, 500).wait(100).to({ alpha: 0 }, 500).call(function () {
            _this.prompt.scaleX = 0;
            _this.prompt.scaleY = 0;
            _this.prompt.alpha = 1;
        });
    };
    Scene.prototype.isClick = function () {
        if (Data.isPockerClick) {
            this.openTextGroup.alpha = 0;
            this.timer.stop();
        }
    };
    Scene.prototype.resetCount = function () {
        this.count = 12;
        this.countLabel.text = this.count.toString();
    };
    Scene.prototype.timerFunc = function () {
        this.count -= 1;
        var a = this.count.toString();
        this.countLabel.text = a;
    };
    Scene.prototype.timerComFunc = function () {
        this.endClick();
    };
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map