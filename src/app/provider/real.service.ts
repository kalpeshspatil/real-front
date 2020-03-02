import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FnParam } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class RealService {
 url = window.location.origin + "/api/";
  constructor(public http :HttpClient ) { 





  }

  userRegistartion(formData){

 
    let param = "userRegistration";
    console.log(formData);
    return new Promise((resolve, reject) => {
        this.http.post(this.url + param, formData).subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    });


}

loginUser(formData){

  let param="loginUser";
  return new Promise((resolve, reject) => {

    this.http.post(this.url+param,formData).subscribe(res => {
        resolve(res);
         
    }, (err) => {
      reject(err);
  });

  });

}


addProperty(formData){


  let param="addProperty";
  return new Promise((resolve, reject) => {

    this.http.post(this.url+param,formData).subscribe(res => {
        resolve(res);
         
    }, (err) => {
      reject(err);
  });

  });

}

getPropertyList(){


  let param="getPropertyList";
  return new Promise((resolve, reject) => {

    this.http.get(this.url+param).subscribe(res => {
        resolve(res);
         
    }, (err) => {
      reject(err);
  });

  });

}
searchForProperty(data){


  let param="searchPropertyList";
  return new Promise((resolve, reject) => {

    this.http.post(this.url+param,data).subscribe(res => {
        resolve(res);
         
    }, (err) => {
      reject(err);
  });

  });

}
}
