import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "./User";


/*const getRandomIndex = () => {
	return Math.floor(Math.random() * DummyUsers.length);
}*/

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})
export class UserComponent {
	@Input({required: true}) user!: User;
	@Output() select = new EventEmitter<string>();

	// avatar = input.required<string>();
	// name = input.required<string>();
	//
	// imagePath = computed(() => {
	// 	return `assets/users/${this.avatar()}`;
	// })

	get imagePath() {
		return `assets/users/${this.user.avatar}`;
	}

	onSelectUser() {
		this.select.emit(this.user.id);
	}
}
