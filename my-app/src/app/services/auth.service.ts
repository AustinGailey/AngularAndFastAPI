import { Injectable } from '@angular/core'; 
 
@Injectable({ 
    providedIn: 'root' 
}) 
export class AuthService { 
    constructor() { 
    } 
 
    getUserDetails() { 
        var userInfo = localStorage.getItem('userInfo')
        if(userInfo != null){
          return JSON.parse(userInfo)
        }else{
          return null
        }
    } 
     
    setDataInLocalStorage(variableName: string, data: string) { 
        localStorage.setItem(variableName, data); 
    } 
 
    getToken() { 
        return localStorage.getItem('token'); 
    } 
 
    clearStorage() { 
        localStorage.clear(); 
    } 
}