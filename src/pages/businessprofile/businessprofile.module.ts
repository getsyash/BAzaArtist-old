import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessprofilePage } from './businessprofile';

@NgModule({
  declarations: [
    BusinessprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessprofilePage),
  ],
})
export class BusinessprofilePageModule {}
