import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowListComponent } from './flow-list/flow-list.component';
import { WorkFlowsComponent } from './work-flows/work-flows.component';
import { StartFlowComponent } from './start-flow/start-flow.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowListComponent,
    WorkFlowsComponent,
    StartFlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
