import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { login } from '../model/login';

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

    public NewMeter(meter, read){
        this.url = `http://localhost?meter=${meter}&read=${read}`;
        return this.http.get<login[]>(this.url);
    }
}