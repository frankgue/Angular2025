import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() selectedUser = new EventEmitter<void>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    
  }
}
