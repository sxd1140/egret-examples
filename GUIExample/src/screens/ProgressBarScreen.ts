/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/// <reference path="../egret.d.ts"/>
/// <reference path="ScreenBase.ts"/>

class ProgressBarScreen extends ScreenBase {

    public constructor() {
        super();
    }

    public createChildren():void {
        super.createChildren();

        var progressBar:egret.ProgressBar = new egret.ProgressBar();
        progressBar.width = 250;
        progressBar.height = 21;
        progressBar.horizontalCenter = 120;
        progressBar.verticalCenter = -50;
        this.addElement(progressBar);
        egret.Tween.get(progressBar, {loop:true}).to({value:100}, 3000);

        progressBar = new egret.ProgressBar();
        progressBar.width = 250;
        progressBar.height = 21;
        progressBar.horizontalCenter = 120;
        progressBar.verticalCenter = 50;
        progressBar.direction = egret.ProgressBarDirection.RIGHT_TO_LEFT;
        this.addElement(progressBar);
        egret.Tween.get(progressBar, {loop:true}).to({value:100}, 3000);

        progressBar = new egret.ProgressBar();
        progressBar.width = 100;
        progressBar.height = 250;
        progressBar.horizontalCenter = -120;
        progressBar.verticalCenter = 0;
        progressBar.direction = egret.ProgressBarDirection.BOTTOM_TO_TOP;
        this.addElement(progressBar);
        egret.Tween.get(progressBar, {loop:true}).to({value:100}, 3000);

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
    }

    private onRemovedFromStage(event:egret.Event):void{
        for(var i:number=0;i<this.numElements;i++){
            var progressBar:egret.ProgressBar = <egret.ProgressBar><any> this.getElementAt(i);
            egret.Tween.removeTweens(progressBar);
        }
    }
}