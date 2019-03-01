class GameUtil {
    /**
     * 公用方法类
     */

    /**
     * 获取舞台高度
     */
    public static getStageHeight(): number {
        return egret.MainContext.instance.stage.stageHeight
    }
    /**
     * 获取舞台宽度
     */
    public static getStageWidth(): number {
        return egret.MainContext.instance.stage.stageWidth
    }

    /**
     * Bitmap操作
     */

    public static createBitmapByName(name: string, type: string = 'png') {
        let result: egret.Bitmap = new egret.Bitmap()
        let texture: egret.Texture = RES.getRes(name + '_' + type)
        result.texture = texture
        return result
    }
    /**
     * MovieClip操作
     */
    public static createMovieClipByName(name: string):egret.MovieClip {
        let data = RES.getRes(name + '.json')
        let txtr = RES.getRes(name + '.png')
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr)
        return new egret.MovieClip(mcFactory.generateMovieClipData(name))
    }


}