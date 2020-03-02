import { Component, OnInit } from '@angular/core';
import { RealService } from '../provider/real.service';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {


  propertylist:any;
  colSize=3;
  constructor(public service:RealService) { }

  ngOnInit() {
    console.log(window.innerWidth)
  if(window.innerWidth < 500){
    this.colSize=1;
  }
    this.service.getPropertyList().then(resp=>{

     let res:any=resp;        
     this.propertylist=res.propertylist;

    });

 }

 resize(){
  if(window.innerWidth < 500){
    this.colSize=1;
  }
  else {
    this.colSize=3;
  }

 }
}
