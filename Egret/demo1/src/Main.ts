class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super()
        this.once(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
    }
    private onAddToStage(event: egret.Event) {
        let imgeLoader: egret.ImageLoader = new egret.ImageLoader
        imgeLoader.once(egret.Event.COMPLETE,this.imgLoadHandler,this)
        imgeLoader.load("resource/assets/timg.jpg")
    }

    private imgLoadHandler(e: egret.Event): void {
        let bmd: egret.Bitmap= e.currentTarget.data
        let img: egret.Bitmap = new egret.Bitmap()
   

        img.x = 100
        img.y = 100
        this.addChild(img)
        
        img.anchorOffsetX = 0
        img.anchorOffsetY = 0
        img.x = this.stage.stageWidth * .5
        img.y = this.stage.stageHeight * .5


        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e:egret.TouchEvent)=>{
             img.x = e.localX
             img.y = e.localY
        },this)
    }


}