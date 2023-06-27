import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private service: DesignUtilityService) { }

  subject: string = '';
  ngOnInit(): void {
    this.service.Comp.subscribe(res=>{
      this.subject = res;
      
    })
  }

}
