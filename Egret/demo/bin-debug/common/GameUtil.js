var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtil = (function () {
    function GameUtil() {
    }
    /**
     * 公用方法类
     */
    /**
     * 获取舞台高度
     */
    GameUtil.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    /**
     * 获取舞台宽度
     */
    GameUtil.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    /**
     * Bitmap操作
     */
    GameUtil.createBitmapByName = function (name, type) {
        if (type === void 0) { type = 'png'; }
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_' + type);
        result.texture = texture;
        return result;
    };
    /**
     * MovieClip操作
     */
    GameUtil.createMovieClipByName = function (name) {
        var data = RES.getRes(name + '.json');
        var txtr = RES.getRes(name + '.png');
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(name));
    };
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");
