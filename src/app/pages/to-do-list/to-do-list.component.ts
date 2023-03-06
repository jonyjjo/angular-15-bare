import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  public toDos: ToDo[] = [];
  
  public constructor(private toDoService: ToDoService) {
    //  
  }

  public ngOnInit(): void {
    this.toDos = this.toDoService.getToDos();
  }

}
