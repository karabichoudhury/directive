import { Directive , Renderer2 ,OnInit,ElementRef,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string='blue';
  @Input() highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
  	this.backgroundColor=this.defaultColor;	
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
  	//this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue',false,false);
  	//this.backgroundColor='blue';
  	this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
  	//this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent',false,false);
  	//this.backgroundColor='transparent';
  	this.backgroundColor=this.highlightColor;
  }
}
