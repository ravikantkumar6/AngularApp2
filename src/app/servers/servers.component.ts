import { Component, OnInit } from '@angular/core';
import { TransfereService } from '../TransfereService';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [TransfereService]
})
export class ServersComponent implements OnInit { 
  summaries:string[] = ["Testing..."]; 
  constructor(private tranferService : TransfereService) {
   }
  ngOnInit() {
  }
  updateDate(){
    this.summaries = TransfereService.serves;
  }
}
