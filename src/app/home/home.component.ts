import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RealService } from '../provider/real.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propertylist:any;
  searchPropertyField="";
  search:boolean=false;




  constructor(public dialog: MatDialog,public service:RealService,public rout: Router) { }

  ngOnInit() {
    this.rout.navigateByUrl("/static");
  }
  searchForProperty(data){
    this.searchPropertyField = JSON.stringify(data);  
    const navigationExtras: NavigationExtras = {
			queryParams: {
				"q": this.searchPropertyField
			
			}
    };
    

		this.rout.navigate(['/searchproperty'], navigationExtras);
    

  }


}
