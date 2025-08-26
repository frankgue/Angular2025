import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { routes as userRoutes } from "./users/users.routes";

export const  routes: Routes = [
    {
        path: '', // <your-domain>/tasks
        // redirectTo: '/users/u1',
        // pathMatch: 'full'
        component: NoTaskComponent
    },
    {
        path: 'tasks', // <your-domain>/tasks
        component: TasksComponent
    },
    {
        path: 'users/:userId', // <your-domain>/users/:userId
        component: UserTasksComponent,
        children: userRoutes,
        data: {
            message: "Hello!"
        }
    },
    {
        path: '**', // <your-domain>/anything-else
        component: NotFoundComponent
    }
]