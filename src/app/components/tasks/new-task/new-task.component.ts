import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { newTask } from "./new-task.model";
import { TasksService } from "../../../services/tasks/tasks.service";

@Component({
	selector: ' app-new-task',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
	@Input({required: true}) userId!: string;
	@Output() closeDialog = new EventEmitter<void>();
	newTask: newTask = {
		enteredTitle: '',
		enteredSummary: '',
		enteredDate: ''
	};
	private tasksService = inject(TasksService);

	onCloseDialog() {
		this.closeDialog.emit();
	}

	onSubmit() {
		this.tasksService.addTask(this.newTask, this.userId);
		this.closeDialog.emit();
	}
}
