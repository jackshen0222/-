class Tool extends egret.DisplayObjectContainer {
    public static createBox(x: number, y: number, w: number, h: number,color:any): egret.Shape {
        let box: egret.Shape = new egret.Shape();
        box.x = x;
        box.y = y;
        box.graphics.beginFill(color, 1);
        box.graphics.drawRect(0, 0, w, h);
        box.graphics.endFill();
        return box;
    }

}