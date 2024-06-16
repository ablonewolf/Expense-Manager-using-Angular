import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { newTask } from "./new-task.model";

@Component({
	selector: ' app-new-task',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
	@Output() closeDialog = new EventEmitter<void>();
	@Output() addNewTask = new EventEmitter<newTask>();
	newTask: newTask = {
		enteredTitle: '',
		enteredSummary: '',
		enteredDate: ''
	};

	onCloseDialog() {
		this.closeDialog.emit();
	}

	onSubmit() {
		this.addNewTask.emit(this.newTask);
	}
}
