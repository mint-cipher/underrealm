import { StatCubeBoardComponent } from './stat-cube-board/stat-cube-board.component';
import { PnpComponent } from './pnp/pnp.component';
import { PrintRoutes } from './print.routing';
import { PrintMonsterComponent } from './print-monster/print-monster.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonsterModule } from './../monster/monster.module';
import { CommonComponentsModule } from './../common/common-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintComponent } from './print.component';
import { ActionBoardComponent } from './action-board/action-board.component';

@NgModule({
  imports: [
    RouterModule.forChild(PrintRoutes),
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MonsterModule,
    CommonComponentsModule,
  ],
  declarations: [
    PrintComponent,
    PrintMonsterComponent,
    PnpComponent,
    ActionBoardComponent,
    StatCubeBoardComponent
  ],
  exports: [
    ActionBoardComponent,
    StatCubeBoardComponent
  ]
})
export class PrintModule { }