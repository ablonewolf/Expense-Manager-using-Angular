import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { UserComponent } from "./user/user.component";
import { DummyUsers } from "../dummy-users";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [HeaderComponent, UserComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	users = DummyUsers;

	onSelectUser(id: string) {
		console.log(`User with id ${id} has been clicked.`);
	}
}
