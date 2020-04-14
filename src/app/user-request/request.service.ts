import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  apikey=environment.apikey;
    username:string;
  private repo:string;

  constructor() { }
}
