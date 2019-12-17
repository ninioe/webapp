import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  public todos: string[] = [];
  public todoName: string = null;


  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  @Input() public dataFromParent: any = null;
  @Output() public itemAdded: EventEmitter<any> = new EventEmitter();

  addTodo() {
    this.todos.push(this.todoName);
    this.todoService.SendTodo(this.todoName);
    this.itemAdded.emit(this.todoName);
    this.todoName = null;
  }

  calledFromParent() {
    alert("called child method from parent");
  }

}
