import { Component, ViewChild } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild(TodoListComponent) public todoListComponent: TodoListComponent;
  public itemAdded(item: any) {
    console.log("item added from parent", item);
  }

  callChild() {
    this.todoListComponent.calledFromParent();
  }
}
