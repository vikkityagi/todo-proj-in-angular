import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

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
  providers:[TaskService],
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
  ];
  isInputEnabled:boolean =  true;
  alertMessage:any;
  tasks$ = this.taskService.getTasks();


  constructor(private _fb: FormBuilder,private taskService: TaskService) {
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

    if(this.tasks.length < 5 ){
      const task = this._fb.group({
        task_id: [,[Validators.required]],
        progress:[,[Validators.required]],
        date:[,[Validators.required]],
        start_time:[{ value: '', disabled: true },[Validators.required]],
        end_time:[{ value: '', disabled: true },[Validators.required]]
      })

      // this is for enable the end time after start time has any value
      task.get('start_time')?.valueChanges.subscribe(data=>{
        if(data!=""){
          task.get('end_time')?.enable();
        }else{
          task.get('end_time')?.disable();
        }
      })

      
  
      this.tasks.push(task);
    }

    
    

  }


  openModal() {
    $('#myModal').modal('show');
    
  }

  closeModal() {
    $('#myModal').modal('hide');
  }

  // this is for to enable or disable the start time acc
  onProgress(event: any){
    const task = this.tasks.at(this.tasks.length-1) as FormGroup;
    const progress = this.tasks.at(this.tasks.length-1) as FormGroup;
    if(progress.get('progress')?.value != 2){
      task.get('start_time')?.enable();
    }else{
      task.get('start_time')?.disable();
    }
  }

  removeTask(index: number){
    this.tasks.removeAt(index);
  }

  onSubmit() {
    if (this.todoFormGroup.valid) {
      this.taskService.createTasks(this.tasks.value).subscribe({
        next: data => {
          this.showAlert('success', 'Tasks submitted successfully!');
          this.todoFormGroup.reset();
        },
        error: err => {
          this.showAlert('danger', 'There was an error submitting the tasks.');
        }
      });
    } else {
      this.showAlert('warning', 'Please fill out all required fields.');
    }
  }

  showAlert(type: string, message: string) {
    this.alertMessage = { type, message };

    // Hide alert after 5 seconds
    setTimeout(() => {
      this.alertMessage = null;
    }, 5000);
  }

  


}
