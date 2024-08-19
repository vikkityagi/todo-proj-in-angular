import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}
declare var $: any;
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todoFormGroup: any = FormGroup;

  taskList: any[] = [
    { id: 1, name: 'English Practice' },
    { id: 2, name: 'Exercise' },
    { id: 3, name: 'Learn new Skill' },
    { id: 4, name: 'Start Buisness' },
    { id: 5, name: 'Read a book' }
  ]


  constructor(private _fb: FormBuilder) {
    this.todoFormGroup = this._fb.group({
      tasks: this._fb.array([])
    })
  }



  ngOnInit(): void {
    this.addTask();
  }



  get tasks() {
    return this.todoFormGroup.get('tasks') as FormArray;
  }

  addTask() {

    const task = this._fb.group({
      task_id: []
    })

    this.tasks.push(task);

  }


  openModal() {
    $('#myModal').modal('show');
    
  }

  closeModal() {
    $('#myModal').modal('hide');
  }






}
