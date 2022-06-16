import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement:  ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es requerido';

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('Constructor Directive')
    console.log(el)

    this.htmlElement = el;
   }

   ngOnInit(): void {
    console.log('OnInit Directive');
    this.setColor();
    this.setMensaje();
   }

   setColor():void{
    this.htmlElement.nativeElement.style.color = this.color;
   }

   setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this.mensaje;
   }

}
