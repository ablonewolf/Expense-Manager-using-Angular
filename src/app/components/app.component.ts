import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { DummyUsers } from "../../dummy-users";
import { TasksComponent } from "./tasks/tasks.component";
import { HeaderComponent } from "./header/header.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [HeaderComponent, UserComponent, TasksComponent, HeaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	users = DummyUsers;
	selectedUserId?: string;

	get selectedUser() {
		return this.users.find((user) => user.id === this.selectedUserId);
	}

	onSelectUser(id: string) {
		this.selectedUserId = id;
	}
}
