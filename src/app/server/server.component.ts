import { Component, OnInit, Input  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from './../_services/index';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() element: {type: string , name: string , content: string};
  message: any;
  subscription: Subscription;
  constructor(private messageService: MessageService) { 
    //this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit() {
  }

}
