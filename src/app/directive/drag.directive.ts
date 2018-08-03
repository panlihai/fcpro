// 弹窗拖拽
import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
    selector: '[fcDrag]'
})
export class fcDragDirective {
    // public el;
    private distance = 50;
    private rotationMultiple = 0.1
    //el表示被指令的元素
    constructor(private el: ElementRef) {
        this.distance = 50;
        this.rotationMultiple = 0.1;
        this.el.nativeElement.draggable=true;
    }
    /**
    * 
    * @param para 
    */
    @HostListener('drapstart') onDrapStart(para) {
        let e = para || window.event;
        let divTop = this.el.nativeElement.clientTop;
        let divLeft = this.el.nativeElement.clientLeft;
        let divWidth = this.el.nativeElement.offsetWidth;
        let divHeight = this.el.nativeElement.offsetHeight;
        this.drag(divLeft, divTop);
    }
    /**
    * 
    * @param para 
    */
    @HostListener('document:drop') onDrop(para) {
        let e = para || window.event;
        let divTop = this.el.nativeElement.clientTop;
        let divLeft = this.el.nativeElement.clientLeft;
        let divWidth = this.el.nativeElement.offsetWidth;
        let divHeight = this.el.nativeElement.offsetHeight;
        this.drag(divLeft, divTop);
    }
    /**
     * 
     * @param para 
     */
    @HostListener('dragenter') onDragEnter(para) {
        let e = para || window.event;
        let divTop = this.el.nativeElement.clientTop;
        let divLeft = this.el.nativeElement.clientLeft;
        let divWidth = this.el.nativeElement.offsetWidth;
        let divHeight = this.el.nativeElement.offsetHeight;
        this.drag(divLeft, divTop);
    }
    /**
     * 拖拽
     * @param pctX x轴偏移
     * @param pctY y轴偏移
     */
    private drag(pctX: number, pctY: number) {
        this.el.nativeElement.style.left = pctX + 'px';
        this.el.nativeElement.style.right = pctY + 'px';
    }
}