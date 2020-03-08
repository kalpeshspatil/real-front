import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { RealService } from "../provider/real.service";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  userFirstName = "";
  userMiddleName = "";
  userLastName = "";
  userEmail = "";
  userPassword = "";
  userConfirmPassword = "";
  userAddress = "";
  userCity = "";
  userState = "";
  userCountry = "";
  userMobileNo = "";
  userPostalCode = "";
  error_msg = "";
  loginRes: any;
  show=false;

  personalInfoNext = false;
  addressInfoNext =false;
  AddressInfoCompleted=false;
  PesonalInfoCompleted = false;
  finish = false;
  constructor(
    public service: RealService,
    public dialog: MatDialog,
    public dialogRef1: MatDialogRef<RegistrationComponent>
  ) {}

  ngOnInit() {
    this.loginRes = JSON.parse(sessionStorage.getItem("loginRes"));
  }

  goNext(action, stepper: any) {
    if (action == "personalInfoNext") {
      this.personalInfoNext = true;
      if (
        this.userFirstName != "" &&
        this.userMiddleName != "" &&
        this.userLastName != "" &&
        this.userEmail != "" &&
        this.userPassword != "" &&
        this.userConfirmPassword != ""
      ) {
        this.PesonalInfoCompleted = true;
        setTimeout(() => {
          stepper.next();
        }, 16);
      } else {
        this.PesonalInfoCompleted = false;
      }
    } else if (action == "finish") {

      this.addressInfoNext=true;
      let date = new Date();
      let now_utc = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
      );
      let timestamp = new Date(now_utc).getTime();

      if (
        this.userAddress != "" &&
        this.userCity != "" &&
        this.userState != "" &&
        this.userCountry != "" &&
        this.userMobileNo != "" &&
        this.userPostalCode != ""
      ) {
        
        this.AddressInfoCompleted = true;
        setTimeout(() => {
          stepper.next();
        }, 16);
      }
      else{
        this.AddressInfoCompleted = false;

      }

      
      //const formData: FormData = new FormData();
     
      let data: any = {
        userFirstName: this.userFirstName,
        userMiddleName: this.userMiddleName,
        userLastName: this.userLastName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userConfirmPassword: this.userConfirmPassword,
        userAddress: this.userAddress,
        userCity: this.userCity,
        userState: this.userState,
        userCountry: this.userCountry,
        userMobileNo: this.userMobileNo,
        userPostalCode: this.userPostalCode
      };
      if(this.AddressInfoCompleted==true){
      this.service.userRegistartion(data).then(res => {
        let resp: any = res;
        console.log(resp);
        if (resp.res == 1) {
          this.dialogRef1.close(resp);
        }
      });
     }
    }
  }
  close() {
    this.dialogRef1.close(null);
  }
}
