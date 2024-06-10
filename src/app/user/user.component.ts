import { Component } from '@angular/core';
import { DummyUsers } from "../../dummy-users";


const getRandomIndex = () => {
	return Math.floor(Math.random() * DummyUsers.length);
}

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})
export class UserComponent {
	selectedUser = DummyUsers[getRandomIndex()];

	get imagePath() {
		return 'assets/users/' + this.selectedUser.avatar;
	}

	onSelectUser() {
		this.selectedUser = DummyUsers[getRandomIndex()];
	}
}
