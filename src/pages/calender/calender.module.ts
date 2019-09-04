import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalenderPage } from './calender';
import { NgCalendarModule } from 'ionic2-calendar'
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [
    CalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(CalenderPage),
    NgCalendarModule,
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule

  ],
})
export class CalenderPageModule {}
