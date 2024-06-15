import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Tasks } from "./Tasks";
import { NewTaskComponent } from "./new-task/new-task.component";

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
	tasks = Tasks

	get selectedUserTasks() {
		return this.tasks.filter((task) => task.userId === this.userId);
	}

	onCompleteTask(id: string) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
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
