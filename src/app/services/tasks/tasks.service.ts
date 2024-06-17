import { Tasks } from "../../components/tasks/Tasks"
import { newTask } from "../../components/tasks/new-task/new-task.model";
import { Task } from "../../components/tasks/task/task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class TasksService {
	private tasks;

	constructor() {
		const tasks = localStorage.getItem('tasks');
		if (tasks) {
			this.tasks = JSON.parse(tasks);
		} else {
			this.tasks = Tasks;
		}
	}

	getUserTasks(userId: string) {
		return this.tasks.filter((task: Task) => task.userId === userId)
	}

	addTask(task: newTask, userId: string) {
		const id = (this.tasks.length + 1).toString();
		const toBeAddedTask: Task = {
			id: id,
			userId: userId,
			title: task.enteredTitle,
			summary: task.enteredSummary,
			dueDate: task.enteredDate
		}
		this.tasks.push(toBeAddedTask);
		this.saveTasksToLocalStorage();
	}

	removeTask(id: string) {
		this.tasks = this.tasks.filter((task: Task) => task.id !== id);
		this.saveTasksToLocalStorage();
	}

	private saveTasksToLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
	}
}
