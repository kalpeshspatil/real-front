import { Component, OnInit } from '@angular/core';
import { RealService } from '../provider/real.service';


import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {
  displayStepper=false;
  error_msg="";
  imageFiles=[];
  
  ReciButtonToggle=true;
  PropertyDetailsInfo=false;
  PesonalInfoCompleted=false;
  LocalityDetailsInfo=false;
  RentalDetailsInfo=false;
  AmenitiesDetailsInfo=false;
  finish=false;
  AvailabilityDetailsCompleted:Boolean=false;
  PropertyDetailsInfoCompleted:Boolean=false;
  LocalityDetailsCompleted:Boolean=false;
  RentalDetailsCompleted:Boolean=false;
  AmenitiesDetailsCompeted:Boolean=false;
  addApartmentType="default";
  addBhkType="default";
  propertyAge="default";
  propertyFacing="default";
  maintenance="default";
  preferedTenants="default";
  furnishing="default";
  parking="default";
  waterSupply="default";
  gym="default";
  nonVegAllowed="default";
  gatewayCommunity="default";
  whoWillShowHouse="default";
  availability="default";  
  typeOfAd=undefined;
  apartmentName="";
  floor="";
  totalFloor="";
  propertySize="";
  propertyCity="";
  propertyLocality="";
  streetAddress="";
  expectedRent="";
  expectedDeposite="";
  bathrooms="";
  balcony="";
  secondaryNo="";
  startTime="";
  endTime="";
  propertyType="";
  loginRes:any;
  availableForLease="";
  expectedDepposite="";
  availableForLeaseList: string[] = ['Yes', 'No'];

  tetsForButtonToggle
  toggle: String = "Residential";
  constructor(public service:RealService) { }
  
 
  
  ngOnInit() {
    this.loginRes = JSON.parse(sessionStorage.getItem("loginRes"));
  }
  submit()
  {
    if(this.typeOfAd){
    this.displayStepper=true;
    }
  }
  goNext(action,stepper:any,data?){
    this.PropertyDetailsInfo=true;
     
    if(action=='PropertyDetailsInfo' &&  this.addApartmentType != 'default' && this.apartmentName != '' && this.addBhkType != 'default' && this.floor != '' &&this.totalFloor !='' && this.propertyAge != 'default' && this.propertyFacing != 'default' && this.propertySize != ''){
    this.PropertyDetailsInfoCompleted=true;
   
    
     
      setTimeout(() => {
        stepper.next();
      }, 16);
    
    }
    else if(action=='LocalityDetailsInfo'){
      this.LocalityDetailsInfo=true;
   
    if(this.propertyCity != '' && this.propertyLocality != '' && this.streetAddress != '') {
    
    this.LocalityDetailsCompleted=true;
   


    setTimeout(() => {
      stepper.next();
    }, 16);

    } }
    else if(action=='RentalDetailsInfo') {
      this.RentalDetailsInfo=true;
      if( this.expectedRent != '' && this.expectedDeposite != '' && this.maintenance != 'default' && this.preferedTenants != 'default' && this.furnishing != 'default' && this.parking != 'default')
     {
    this.RentalDetailsCompleted=true;
   
    setTimeout(() => {
      stepper.next();
    }, 16);

    }
  }
    else if(action=='AmenitiesDetailsInfo' ){
       this.AmenitiesDetailsInfo=true;
      if(this.bathrooms != '' && this.balcony != '' && this.waterSupply != 'default' && this.gym != 'default' && this.nonVegAllowed !='default' && this.gatewayCommunity != 'default' && this.whoWillShowHouse != 'default' && this.secondaryNo != '')
       {
      this.AmenitiesDetailsCompeted=true;
     
  
  
      setTimeout(() => {
        stepper.next();
      }, 16);
  
      }

  }
  else if(action=='finish' ){
    this.finish=true;
   if(this.availability != 'default' && this.startTime != '' && this.endTime != '' )
    {
      console.log(this.loginRes);
      data["propertyType"]=this.toggle;
      data["typeOfAd"]=this.typeOfAd;
      data["imageFiles"]=this.imageFiles;
      data["secretKey"]=this.loginRes.secretKey;
      data["userId"]=this.loginRes.user.userPkid;
      this.service.addProperty(data).then(res=>{

      })

   setTimeout(() => {
     
   }, 16);

   }

}
}
  toggleView(change: MatButtonToggleChange){
    this.toggle = change.value;
  }
  typeOdAdView(change: MatButtonToggleChange){
    this.typeOfAd = change.value;
  }


  onClickSubmit(data){

    console.log(data);

  }

  onSelectFile(event) {
    console.log(event.target.files);
    this.imageFiles=event.target.files;
  }

}
