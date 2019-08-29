import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleArtistPage } from './single-artist';

@NgModule({
  declarations: [
    SingleArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleArtistPage),
  ],
})
export class SingleArtistPageModule {}
