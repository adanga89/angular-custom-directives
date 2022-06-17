import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color = 'red';
  private _mensaje = 'Este campo es requerido';
  htmlElement:  ElementRef<HTMLElement>;
  @Input() set color( valor: string){
    this._color = valor;
    this.setColor();
  };
  //@Input()  mensaje: string = 'Este campo es requerido';

  @Input() set mensaje(valor: string){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean){
    if(!valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('Constructor Directive')
    console.log(el)

    this.htmlElement = el;
   }

   ngOnInit(): void {
    // console.log('OnInit Directive');
    this.setColor();
    this.setMensaje();
   }

   setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
   }

   setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
   }

}
