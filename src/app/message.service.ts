import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message: string[] = [];
  refreshMessage: string[] = [];
  private messageChecker =  new RegExp('session is about to expire*');

  add(message: string) {

    if (this.messageChecker.test(message)) {

      this.refreshMessage[0] = message;
    } else {

      this.message[0] = message;
    }
  }

  clear() {

    this.message = [];
    this.refreshMessage = [];
  }
}
