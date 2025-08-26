import { Component, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {

  userName = input.required<string>();
  message = input.required<string>();

}


export const resolveUsername: ResolveFn<string> =  (activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName  = usersService.users.find(user => user.id === activateRoute.paramMap.get('userId'))?.name ?? 'Unknown User';

  return userName;
} 

export const resolveTitle: ResolveFn<string> = (activateRouteSnapshot, routerState) => {
  return resolveUsername(activateRouteSnapshot, routerState) + "'s Tasks";
}