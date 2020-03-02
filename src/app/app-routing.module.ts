import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { HomestaticComponent }  from  './homestatic/homestatic.component';
import { SearchpropertyComponent } from './searchproperty/searchproperty.component';

const routes: Routes = [

 {path: '', component: HomeComponent,

   children:[
             {path: '', component: HomestaticComponent},
             {path: 'static', component: HomestaticComponent},
             {path: 'searchproperty', component: SearchpropertyComponent }
            ]

 },
  {path: 'addProperty', component: AddpropertyComponent},
  {path: '**', component: HomestaticComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
