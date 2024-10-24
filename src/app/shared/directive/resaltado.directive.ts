import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {

  @Input()
  color='yellow'

  constructor(private el:ElementRef<HTMLElement>) {
    
    this.applyStyles();
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('este es cganges:',changes);
    if(changes['color']){
      this.applyStyles();
    }
  }


  applyStyles():void{
console.log(this.el);
    this.el.nativeElement.style.backgroundColor =this.color;
  }

}
