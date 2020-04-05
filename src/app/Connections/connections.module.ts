import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
// components
import { AllInvitationsComponent } from './all-invitations/all-invitations.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MyblocklistComponent } from './myblocklist/myblocklist.component';

@NgModule({
  declarations: [
    AllInvitationsComponent,
    BlocksComponent,
    ConnectionsComponent,
    MyblocklistComponent
  ],
  imports: [
    CommonModule,
    ConnectionsRoutingModule
  ]
})
export class ConnectionsModule { }
