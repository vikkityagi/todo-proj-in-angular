import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoList: Todo[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      };
      this.todoList.push(newTodo);
      this.newTask = '';
    }
  }

  toggleTaskCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTask(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

}
