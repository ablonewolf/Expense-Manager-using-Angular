import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Tasks } from "./Tasks";

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [
		TaskComponent
	],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css'
})
export class TasksComponent {
	@Input({required: true}) userId!: string;
	@Input({required: true}) name!: string;
	tasks = Tasks

	get selectedUserTasks() {
		return this.tasks.filter((task) => task.userId === this.userId);
	}

	onCompleteTask(id: string) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}
}
