import { Component } from '@angular/core';
import { MessageService } from '../_services/index';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  headerTitle = 'body';
  serverElements = [];
  constructor (private messageService: MessageService) {
  this.serverElements = [{
      type : 'server',
      name : 'testing',
      content: 'test Server!'
    }];
  }
  onServerAdded(serverData: {serverName: string, serverContent: string }){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBluePrintAdded(serverData: {serverName: string, serverContent: string }){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Body Component to App Component!');
}

clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
}

}
