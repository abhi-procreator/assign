import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service: DesignUtilityService) { }

  subject: string = '';
  ngOnInit(): void {
   this.service.Comp.subscribe(res=>{
    this.subject = res;
   })
  }
  onChange(val:any){
    this.service.Comp.next(val)
  }

}
