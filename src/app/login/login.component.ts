import { Component, OnInit } from '@angular/core';
import { RealService } from '../provider/real.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = false;
  error_message="";
  userEmail="";
  userPassword="";
  constructor(public service:RealService,public dialog:MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  loginUser(){

 
    let data:any = {

      'userEmail':this.userEmail,    
      'userPassword':this.userPassword
      } 

      this.service.loginUser(data).then(res => {
        let resp: any = res;

          console.log(resp);
          if(resp.status==1){
            
            this.dialog.close(resp);
          }else{
            this.error_message = resp.message;
			    	this.loginError = true;
          }

      });



      

}
close(){
  this.dialog.close();

}
}

 
