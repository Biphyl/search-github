import { Component, OnInit } from '@angular/core'; 
import { RequestService } from '../user-request/request.service';
import { resolve } from 'dns';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  providers:[RequestService],
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  inputsearch=''
  outputresult=[]
  users:any=[]
  reposearch=''
  outputRepoSearch=[]
  repos:any=[]

  constructor(private requestservice:RequestService) { }

    seaech(inputsearch:string){
      let promise= new Promise((resolve,reject)=> {
      this.requestservice.userInfo(this.inputsearch)
      .toPromise().then((data=>{
        this.outputresult=data['items'];
        this.users=data;
        console.log(data)
      }))
      })
    }

    searchRepo(reposearch:string){
      let promise= new Promise((resolve,reject)=>{
      this.requestservice.repoLink(this.reposearch)
      .toPromise().then((data)=>{
        this.outputRepoSearch=data['items'];
        this.repos=data;
        console.log(data)
      })
      })
    }

  ngOnInit(): void {
  }

}
