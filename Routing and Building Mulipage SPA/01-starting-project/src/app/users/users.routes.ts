import { Routes } from "@angular/router";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes : Routes = [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full'
            },
            {
                path: 'tasks', // <your-domain>/users/:userId/tasks
                component: TasksComponent,
                runGuardsAndResolvers: 'always',
                // runGuardsAndResolvers: 'paramsOrQueryParamsChange',
                resolve: {
                    userTasks: resolveUserTasks,
                }
            },
            {
                path: 'tasks/new', // <your-domain>/users/:userId/tasks/new
                component: NewTaskComponent,
                canDeactivate: [canLeaveEditPage]
            }
        ]