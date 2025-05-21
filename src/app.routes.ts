import { Routes } from "@angular/router";
import { routes as UserRoutes } from "./app/users/user.routes";

import { TasksComponent } from "./app/tasks/tasks.component";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./app/tasks/new-task/new-task.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
  },
  {
    // dynamic route
    path: 'users/:userId', // <your-domain/users/<u1>
    // component; has shared headers for all users; will output user specific tasks later
    component: UserTasksComponent,
    children: UserRoutes,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];