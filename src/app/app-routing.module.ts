import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkFlowsComponent } from './work-flows/work-flows.component';

const routes: Routes = [
  // this redirects the empty path to (temporarily) /flows
  { path: '', redirectTo: '/flows', pathMatch: 'full' },
  { path: 'flows', component: WorkFlowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
