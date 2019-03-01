class Button extends eui.Component {
    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchEventHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEventHandler, this);
    };

    public labelDisplay: eui.Label;
    private _label: string = "";
    private touchDown: boolean;
    private _size: number;

    public get label(): string {
        return this._label;
    };

    public set label(val: string) {
        this._label = val;
        if (this.labelDisplay) {
            this.labelDisplay.text = val;
        }
    };
    public get size(): number {
        return this._size;
    };
    public set size(val: number) {
        this._size = val;
        this.labelDisplay.size = val;
    };;

    protected chlidrenCreated(): void {
        super.childrenCreated();
        if (this.labelDisplay) {
            this.labelDisplay.text = this._label;
        }
    };


    private touchEventHandler(e: egret.TouchEvent): void {
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
    protected getCurrentState(): string {
        if (!this.enabled) {
            return 'disabled';
        }
        if (this.touchDown) {
            return 'down';
        }
        return 'up';
    }



};