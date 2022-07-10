import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { login, document } from '../model/login';

@Injectable({
    providedIn: 'root'
})

export class Login{
    url: string = 'http://localhost';

    constructor(private http:HttpClient){}

    public logger(user, password){
        this.url = `http://localhost?user=${user}&password=${password}`;
        return this.http.get<login[]>(this.url);
    }

    public BringData(document){
        this.url = `http://localhost?data=${document}`;
        return this.http.get<document[]>(this.url);
    }

    public BringAllData(){
        this.url = `http://localhost`;
        return this.http.get<document[]>(this.url);
    }
}