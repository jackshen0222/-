/**
 * base场景，所有场景继承这个
 */

class BaseScene extends egret.DisplayObjectContainer{
    public constructor(){
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this)
    }

    protected initView(){

    }
}