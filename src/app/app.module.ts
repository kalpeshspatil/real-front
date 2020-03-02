import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepperModule, MatProgressSpinnerModule, MatToolbarModule, MatButtonModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSlideToggleModule, MatNativeDateModule } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 




import {

 
  MatIconModule,

  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule,
  MatTabsModule
} from "@angular/material";
import { PropertylistComponent } from './propertylist/propertylist.component';
import { HomestaticComponent } from './homestatic/homestatic.component';
import { SearchpropertyComponent } from './searchproperty/searchproperty.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    AddpropertyComponent,
    PropertylistComponent,
    HomestaticComponent,
    SearchpropertyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatCardModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatGridListModule,
    MatCarouselModule,
    NgbModule
    
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent,
  RegistrationComponent,
  
  ]
})
export class AppModule { }
