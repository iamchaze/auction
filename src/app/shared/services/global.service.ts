import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  databaseUrl = "http://localhost:3000"

  //-----------------CRUD--------------------
  //Get all Records (GET)
  getRecords(path:string){
    const url = `${this.databaseUrl}/${path}`
    return this.http.get(url)
  }

  //Get Single Record (GET)
  getSingleRecord(path:string, id:any){
    const url = `${this.databaseUrl}/${path}/${id}`
    this.http.get(url)
  }

  //Add a Record (POST)
  addRecord(path:string, data:any){
    const url = `${this.databaseUrl}/${path}`
    return this.http.post(url, data)
  }





  // -----------------Autorization-------------------
  login(user:any, remember:boolean){
    if(remember){
      localStorage.setItem("userkey", user)
    } else {
      sessionStorage.setItem("userkey", user)
    }
  }
  logout(){
    sessionStorage?.removeItem("userkey")
    localStorage?.removeItem("userkey")
  }
}
