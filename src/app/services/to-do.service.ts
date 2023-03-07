import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  protected toDos: ToDo[] = [
    {
      id: "1",
      name: "Item 1",
      description: "Example description",
      isDone: false
    },
    {
      id: "2",
      name: "Item 2",
      description: "Example description 1",
      isDone: false
    },
    {
      id: "3",
      name: "Item 3",
      description: "Example description 3",
      isDone: false
    },
  ];

  constructor() { }

  public getToDos(): ToDo[] {
    return this.toDos;
  }

  public getToDo(id: string): ToDo | undefined {
    return this.getToDos().find(x => x.id === id);
  }

  // public updateToDo(toDo: ToDo): ToDo {
  //   // 
  // }
}
