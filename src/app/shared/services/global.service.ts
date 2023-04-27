import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient, private router: Router) { }

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
  addRecord(path:string, id:any){
    const url = `${this.databaseUrl}/${path}`
    return this.http.post(url, id)
  }

  //Delete a Record (DELETE)
  deleteRecord(path:string, id:any){
    const url = `${this.databaseUrl}/${path}/${id}`;
    return this.http.delete(url)
  }

  //Edit a Record (PUT)
  editRecord(path:string, data:any, id:any){
    const url = `${this.databaseUrl}/${path}/${data.id}`
    return this.http.put(url, data)
  }

  // -----------------Autorization-------------------
  login(user:any, remember:boolean){
    if(remember){
      localStorage.setItem("username", user)
      sessionStorage.setItem("username", user)
    } else {
      sessionStorage.setItem("username", user)
    }
  }
  logout(data:any){
    sessionStorage?.removeItem("username")
    localStorage?.removeItem("username")
    this.router.navigate(['/home'])
  }
}
