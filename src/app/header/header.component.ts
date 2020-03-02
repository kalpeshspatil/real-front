import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginRes:any;
  isLogin:Boolean;
  action


  fullName="";
  constructor(public dialog: MatDialog,public router:Router) { }

  ngOnInit() {
  }
  openLogin(action)
  {
    
    const ref=this.dialog.open(LoginComponent,{ disableClose: true })
     ref.afterClosed().subscribe(res =>{
      if(res!= null){
        if(res.status==1){
          this.loginRes=res;
          sessionStorage.setItem("loginRes", JSON.stringify(this.loginRes));
            this.isLogin=true;
            this.fullName="Hello, "+res.user.userFirstName +" "+res.user.userLastName;
            if(action=="addProperty"){
              this.router.navigate(['addProperty']);
            }
        }
      }
    
});

}
  
  openRegistration()
  {
    const ref=this.dialog.open(RegistrationComponent,{ disableClose: true })
    
  }
  logout(){
    this.isLogin=false;
    this.router.navigate(['']);

  }
  addPropertyBtn(){

    if(this.isLogin==true){
      this.router.navigate(['addProperty']);
   }
    else{

       this.openLogin("addProperty");
      
   }
  

  }
  openSideMenu() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
