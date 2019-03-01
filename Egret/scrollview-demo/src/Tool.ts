class Tool extends egret.DisplayObjectContainer {
    public static createBox(a: number, b: number, c: number, d: number): egret.Shape {
        let box:egret.Shape = new egret.Shape;
        box.graphics.beginFill( 0xff0000 );
        box.graphics.drawRect(a,b,c,d);
        return box;
    }

}