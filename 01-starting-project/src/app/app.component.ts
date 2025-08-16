import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string = ""

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onUserSelected(id: string){
    this.selectedUserId = id;
  }

}
