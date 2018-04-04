import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from '../task/task-home/task-home.component';

const routes: Routes = [
    { path: 'taskLists', component: TaskHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule {}
