import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterStateSnapshot,
} from '@angular/router';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  // order = input.required<'asc' | 'desc'>();

  order = input<'asc' | 'desc' | undefined>();
  userId = input.required<string>();
  userTasks = input.required<Task[]>();
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const tasksService = inject(TasksService);
  const userId = activatedRoute.paramMap.get('userId');
  const order = activatedRoute.queryParams['order'];
  const tasks = tasksService
    .allTasks()
    .filter((task) => task.userId === userId);

  if (order && order === 'asc') {
     tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  } else {
     tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  return tasks.length ? tasks : [];

};
