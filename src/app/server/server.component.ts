import { Component } from '@angular/core';
import { TransfereService } from '../TransfereService';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    providers: [TransfereService]
})
export class ServerComponent{
    allowNewServer = false;
    serverName = "";
    summary:string[] = []; 
     
    constructor(private tranferService : TransfereService) {
        setTimeout(() => {
          this.allowNewServer = true;
        }, 2000);
      }

      onChangeInput(event : Event ){
        this.serverName = (<HTMLInputElement> event.target).value;
      }

      onCreateServer(event : any ){
        this.summary = this.tranferService.addServer(this.serverName);
        this.serverName = "";
      }
}