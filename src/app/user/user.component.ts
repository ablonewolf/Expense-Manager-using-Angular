import { Component } from '@angular/core';
import { DUMMY_fUSERS } from "../../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_fUSERS.length);

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})
export class UserComponent {
	selectedUser = DUMMY_fUSERS[randomIndex];

	get imagePath () {
		return 'assets/users/' + this.selectedUser.avatar;
	}
}
