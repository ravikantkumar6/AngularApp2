import { Injectable } from '@angular/core';

@Injectable()
export class TransfereService {
    static serves: string[] = [];
    constructor() { }

    // getServer() {
    //     console.log("data Transfer ");
    //     console.log(TransfereService.serves.pop());
    //     console.log("**************");
    //      return TransfereService.serves; 
    // }

    addServer(serverName: string) {
        TransfereService.serves.push(serverName);
        return TransfereService.serves;
    }
}