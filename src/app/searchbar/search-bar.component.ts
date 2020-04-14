import { Component, OnInit } from '@angular/core'; 
import { RequestService } from '../user-request/request.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  providers:[RequestService],
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
