class pocker extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		// this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);	
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	private pokerBackImg: eui.Button;
	private pokerFrontImg: eui.Button;
	private isClick:boolean = true;

	protected childrenCreated(): void {
		super.childrenCreated();
		this.pokerBackImg.scaleX = 1;
		this.pokerFrontImg.scaleX = 0;
	}

	private pokerClick() {
		Data.isPockerClick = true;
		egret.Tween.get(this.pokerBackImg).to({ scaleX: 0 }, 200, egret.Ease.backIn).call(() => {   //缓动动画翻转
			egret.Tween.get(this.pokerFrontImg).to({ scaleX: 1 }, 200, egret.Ease.backOut);
		});
	}

	public addEvent(): void {
		this.pokerBackImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pokerClick, this);  //添加点击事件回调click方法
	}

	public removeEvent(): void {
		this.pokerBackImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pokerClick, this);  
	}

	public initialize() {
		this.pokerBackImg.scaleX = 1;
		this.pokerFrontImg.scaleX = 0;
	}
}