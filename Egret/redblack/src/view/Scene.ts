class Scene extends eui.Component {
    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "resource/scene.exml";
    }
    private beginBtn: eui.Button;  //定义变量
    private endBtn: eui.Button;
    private timer: egret.Timer;
    private openTextGroup: eui.Group;
    private prompt: eui.Group;
    private countLabel: eui.Label;
    private count: number = 12;
    private timeGroup: eui.Group;
    private pockerOne: pocker;
    private pockerTwo: pocker;

    protected createChildren() {
        super.createChildren();
    }

    private onComplete(): void {
        this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginClick, this);//绑定点击事件
        this.endBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.endClick, this);
        this.openTextGroup.addEventListener(egret.Event.ENTER_FRAME, this.isClick, this);
    }
    //初始化卡牌参数

    private beginClick(): void {
        this.openTextGroup.alpha = 1;
        this.timeGroup.alpha = 1;
        this.timer = new egret.Timer(1000, 12);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.timer.start();
        this.pockerOne.addEvent();
        this.pockerTwo.addEvent();
        this.beginBtn.enabled = false;
    }

    private endClick(): void {
        Data.isPockerClick = false;
        this.promptFunc();
        this.timer.reset();  //如果时间计时未开始，报错
        this.resetCount();
        this.openTextGroup.alpha = 0;
        this.timeGroup.alpha = 0;
        this.pockerOne.initialize();
        this.pockerTwo.initialize();
        this.pockerOne.removeEvent();
        this.pockerTwo.removeEvent();
        this.beginBtn.enabled = true;
    }


    private promptFunc() {  //提示缓动动画，未加判断逻辑
        egret.Tween.get(this.prompt).to({ scaleX: 1, scaleY: 1 }, 500).wait(100).to({ alpha: 0 }, 500).call(() => {
            this.prompt.scaleX = 0;
            this.prompt.scaleY = 0;
            this.prompt.alpha = 1;
        })
    }

    private isClick() {
        if (Data.isPockerClick) {
            this.openTextGroup.alpha = 0;
            this.timer.stop();
        }
    }

    private resetCount() {
        this.count = 12;
        this.countLabel.text = this.count.toString();
    }

    private timerFunc() {
        this.count -= 1
        let a = this.count.toString();
        this.countLabel.text = a;
    }

    private timerComFunc() {
        this.endClick();
    }
}