import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AllInvitationsComponent } from './all-invitations/all-invitations.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MyblocklistComponent } from './myblocklist/myblocklist.component';
const routes: Routes = [
  {
    path : 'all-invitation',
    component : AllInvitationsComponent
  },
  {
    path : 'blocks',
    component : BlocksComponent
  },
  {
    path : 'connections',
    component : ConnectionsComponent
  },
  {
    path : 'block-list',
    component : MyblocklistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionsRoutingModule { }
