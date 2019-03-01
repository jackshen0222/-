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
var Main1 = (function (_super) {
    __extends(Main1, _super);
    function Main1() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main1.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/cartoon-egret_00.png");
    };
    Main1.prototype.launchCollisionTest = function () {
        this._iTouchCollideStatus = TouchCollideStatus.NO_TOUCHED;
        this._bShapeTest = false;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
        this.updateInfo(TouchCollideStatus.NO_TOUCHED);
    };
    Main1.prototype.checkCollision = function (stageX, stageY) {
        /*** 本示例关键代码段开始 ***/
        var bResult = this._bird.hitTestPoint(stageX, stageY, this._bShapeTest);
        /*** 本示例关键代码段结束 ***/
        /// 小圆点同步手指位置
        this._dot.x = stageX;
        this._dot.y = stageY;
        /// 文字信息更新
        this.updateInfo(bResult ? TouchCollideStatus.COLLIDED : TouchCollideStatus.TOUCHED_NO_COLLIDED);
    };
    Main1.prototype.touchHandler = function (evt) {
        switch (evt.type) {
            case egret.TouchEvent.TOUCH_MOVE:
                this.checkCollision(evt.stageX, evt.stageY);
                break;
            case egret.TouchEvent.TOUCH_BEGIN:
                if (!this._txInfo.hitTestPoint(evt.stageX, evt.stageY)) {
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
                    this.stage.once(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
                    this.addChild(this._dot);
                    this.checkCollision(evt.stageX, evt.stageY);
                }
                break;
            case egret.TouchEvent.TOUCH_END:
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
                if (this._dot.parent) {
                    this._dot.parent.removeChild(this._dot);
                }
                this.updateInfo(TouchCollideStatus.NO_TOUCHED);
                break;
        }
    };
    Main1.prototype.updateInfo = function (iStatus) {
        this._txInfo.text =
            "碰撞检测结果：" + (["放上手指！", "想摸我？", "别摸我！！！"][iStatus])
                + "\n\n碰撞检测模式：" + (this._bShapeTest ? "非透明像素区域" : "矩形包围盒")
                + "\n（轻触文字区切换）";
    };
    Main1.prototype.imgLoadHandler = function (evt) {
        var _this = this;
        /// 展示用显示对象： 白鹭小鸟
        this._bird = new egret.Bitmap(evt.currentTarget.data);
        this.addChild(this._bird);
        this._bird.anchorOffsetX = this._bird.width / 2;
        this._bird.anchorOffsetY = this._bird.height / 2;
        this._bird.x = this.stage.stageWidth * 0.5;
        this._bird.y = this.stage.stageHeight * 0.618;
        /// 小圆点，用以提示用户按下位置
        this._dot = new egret.Shape;
        this._dot.graphics.beginFill(0x00ff00);
        this._dot.graphics.drawCircle(0, 0, 5);
        this._dot.graphics.endFill();
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild(this._txInfo);
        this._txInfo.size = 28;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this._txInfo.touchEnabled = true;
        this._txInfo.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            evt.stopImmediatePropagation();
            _this._bShapeTest = !_this._bShapeTest;
            _this.updateInfo(TouchCollideStatus.NO_TOUCHED);
        }, this);
        this.launchCollisionTest();
    };
    return Main1;
}(egret.DisplayObjectContainer));
__reflect(Main1.prototype, "Main1");
var TouchCollideStatus = (function () {
    function TouchCollideStatus() {
    }
    TouchCollideStatus.NO_TOUCHED = 0;
    TouchCollideStatus.TOUCHED_NO_COLLIDED = 1;
    TouchCollideStatus.COLLIDED = 2;
    return TouchCollideStatus;
}());
__reflect(TouchCollideStatus.prototype, "TouchCollideStatus");
//# sourceMappingURL=Main1.js.map