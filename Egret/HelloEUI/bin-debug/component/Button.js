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
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this._label = "";
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.touchEventHandler, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.touchEventHandler, _this);
        return _this;
    }
    Object.defineProperty(Button.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            this._label = val;
            if (this.labelDisplay) {
                this.labelDisplay.text = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            this.labelDisplay.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.chlidrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.labelDisplay) {
            this.labelDisplay.text = this._label;
        }
    };
    Button.prototype.touchEventHandler = function (e) {
        switch (e.type) {
            case egret.TouchEvent.TOUCH_BEGIN: {
                this.touchDown = true;
                break;
            }
            case egret.TouchEvent.TOUCH_END: {
                this.touchDown = false;
                break;
            }
        }
        this.invalidateState();
    };
    Button.prototype.getCurrentState = function () {
        if (!this.enabled) {
            return 'disabled';
        }
        if (this.touchDown) {
            return 'down';
        }
        return 'up';
    };
    return Button;
}(eui.Component));
__reflect(Button.prototype, "Button");
//# sourceMappingURL=Button.js.map