import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Tasks } from "./Tasks";
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTask } from "./new-task/newtask.model";
import { Task } from "./task/task.model";

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

	onSubmitNewTask(task: newTask) {
		const id = (this.tasks.length + 1).toString();
		const toBeAddedTask: Task = {
			id: id,
			userId: this.userId,
			title: task.enteredTitle,
			summary: task.enteredSummary,
			dueDate: task.enteredDate
		}
		this.tasks.push(toBeAddedTask);
		this.addTaskClicked = false;
	}
}
