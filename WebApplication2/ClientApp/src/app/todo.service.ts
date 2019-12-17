import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public SendTodo(item: string) {
    console.log("send todo: " + item);
  }
}
