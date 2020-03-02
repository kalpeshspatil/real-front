import { Component, OnInit } from '@angular/core';
import { RealService } from '../provider/real.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchproperty',
  templateUrl: './searchproperty.component.html',
  styleUrls: ['./searchproperty.component.css']
})
export class SearchpropertyComponent implements OnInit {
  loginRes:any;
  propertylist: any;
  searchPropertyField = "";
  colSize=3;
  constructor(public service: RealService, public route: ActivatedRoute) {

    this.route.queryParams.subscribe(param => {

      this.searchPropertyField = param['q'];
      this.searchForProperty(this.searchPropertyField);
    })

  }

  ngOnInit() {
    if(window.innerWidth < 500){
      this.colSize=1;
    }
   
  }
  searchForProperty(data) {
    
    this.service.searchForProperty(data).then(resp => {

      let res: any = resp;
      this.propertylist = res.propertylist;

    })


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
