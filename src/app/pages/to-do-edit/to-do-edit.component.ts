import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent {
  public toDo?: ToDo;
  
  public toDoFormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    isDone: new FormControl(false),
  });

  public constructor(private route: ActivatedRoute, private toDoService: ToDoService, private formBuilder: FormBuilder) {
    // 
  }

  public ngOnInit(): void {
    const toDoId = this.route.snapshot.paramMap.get('id');

    console.log("toDoId", toDoId);

    if (toDoId) {
      this.toDo = this.toDoService.getToDo(toDoId);
    }

    this.toDoFormGroup.valueChanges.subscribe((value) => {
      console.log("toDoFormGroup", value);
    });
  }

  public save(): void {
    console.log("WIP: Save ToDo...", this.toDo?.id);

    console.log("toDoFormGroup.value", this.toDoFormGroup.value);

    // this.toDoService.update(this.toDo);
  }
}
