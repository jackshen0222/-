//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        console.warn("on add");

        // egret.lifecycle.addLifecycleListener((context) => {
        //     // custom lifecycle plugin

        //     context.onUpdate = () => {

        //     }
        // })

        // egret.lifecycle.onPause = () => {
        //     egret.ticker.pause();
        // }

        // egret.lifecycle.onResume = () => {
        //     egret.ticker.resume();
        // }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    // private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private _touchStatus: Boolean = false;
    private _diatance: egret.Point = new egret.Point();
    private redShape: egret.Shape;
    private blackShape: egret.Shape;

    private mouseMove(evt: egret.TouchEvent) {
        if (this._touchStatus) {
            this.redShape.x = evt.stageX - this._diatance.x;
            this.redShape.y = evt.stageY - this._diatance.y
        }
    }

    private mouseDown(evt: egret.TouchEvent) {
        this._touchStatus = true;
        this._diatance.x = evt.stageX - this.redShape.x;
        this._diatance.y = evt.stageY - this.redShape.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseUp(evt: egret.TouchEvent) {
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
    }

    private createGameScene() {
        let sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        this.blackShape = Tool.createBox(300, 500, 100, 100, 0x000000);
        this.addChild(this.blackShape);

        this.redShape = Tool.createBox(300, 300, 50, 50, 0xff0000);
        this.addChild(this.redShape);
        this.redShape.touchEnabled = true;
        this.redShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.redShape.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);



    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}