import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ' ';
   newServerContent = ' ';
   @ViewChild('newServerContentInput') newServerContentInput: ElementRef; 
  constructor() { }

  ngOnInit() {
  }
  onAddServer(newServerNameInput: HTMLInputElement){
    console.log(newServerNameInput);
    console.log(this.newServerContentInput);
    this.serverCreated.emit({
      serverName : newServerNameInput.value,
       // serverContent: this.newServerContent
       serverContent : this.newServerContentInput.nativeElement.value
    });
  }
   onAddBluePrint(newServerNameInput: HTMLInputElement){
    this.bluePrintCreated.emit({
      serverName :  newServerNameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.newServerContentInput.nativeElement.value
    });

  }

}
