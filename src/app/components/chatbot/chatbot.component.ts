import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }
  showChatboolean : boolean = false
  ngOnInit() {
  }
  showChat(){
    this.showChatboolean = true
  }
  hideChat(){
    this.showChatboolean = false
  }

}
