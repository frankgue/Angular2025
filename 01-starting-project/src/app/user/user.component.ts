import { Component, computed, EventEmitter, Input, output, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  // @Output() selectedUser = new EventEmitter<string>();
  selectedUser = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
