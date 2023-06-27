import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {


  subject: string = '';
  constructor(private service: DesignUtilityService) {
    this.service.Comp.subscribe(res => {
      this.subject = res;
    })
  }


  ngOnInit(): void {
  }
  onChange(val: any) {
    this.service.Comp.next(val.value)
    console.log(val);

  }

}
