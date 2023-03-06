import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  protected toDos: ToDo[] = [
    {
      name: "Item 1",
      description: "Example description",
      isDone: false
    },
    {
      name: "Item 2",
      description: "Example description 1",
      isDone: false
    },
    {
      name: "Item 3",
      description: "Example description 3",
      isDone: false
    },
  ];

  constructor() { }

  public getToDos(): ToDo[] {
    return this.toDos;
  }
}
