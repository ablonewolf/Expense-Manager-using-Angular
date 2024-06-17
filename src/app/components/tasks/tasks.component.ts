import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from "../../services/tasks/tasks.service";

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [
		TaskComponent,
		NewTaskComponent
	],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css'
})
export class TasksComponent {
	@Input({required: true}) userId!: string;
	@Input({required: true}) name!: string;
	private addTaskClicked: boolean = false;
	private tasksService = inject(TasksService);

	get selectedUserTasks() {
		return this.tasksService.getUserTasks(this.userId);
	}

	getAddTaskClicked() {
		return this.addTaskClicked;
	}

	onAddNewTask() {
		this.addTaskClicked = true;
	}

	onCloseNewTaskDialog() {
		this.addTaskClicked = false;
	}

}
