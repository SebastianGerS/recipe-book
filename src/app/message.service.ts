import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message: string[] = [];

  add(message: string) {
    this.message[0] = message;
  }

  clear() {
    this.message = [];
  }
}
