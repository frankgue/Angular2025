import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  // order = input.required<'asc' | 'desc'>();
 
  order = signal<'asc' | 'desc'>('desc');
  private activateRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)  
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  userTasks = computed(() => this.tasksService.allTasks().filter(task => task.userId === this.userId()).sort(
    (a, b) => {
      if (this.order() === 'asc') {
        return a.id > b.id ? -1 : 1;
      } else{
        return a.id > b.id ? 1 : -1;
      }
    }
  ));

  
  ngOnInit(): void {
    const subscription = this.activateRoute.queryParams.subscribe({
      next: (params) => {
        this.order.set(params['order'] ?? 'asc');
      }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

}
