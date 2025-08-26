import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUsername, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { routes as userRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess > 0.5) {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const  routes: Routes = [
    {
        path: '', // <your-domain>/tasks
        // redirectTo: '/users/u1',
        // pathMatch: 'full'
        component: NoTaskComponent,
        title: 'No task selected'
    },
    {
        path: 'tasks', // <your-domain>/tasks
        component: TasksComponent
    },
    {
        path: 'users/:userId', // <your-domain>/users/:userId
        component: UserTasksComponent,
        children: userRoutes,
        // canMatch: [dummyCanMatch],
        data: {
            message: "Hello!"
        },
        resolve: {
            userName: resolveUsername
        },
        title: resolveTitle
    },
    {
        path: '**', // <your-domain>/anything-else
        component: NotFoundComponent
    }
]