import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TiresRoutingModule } from './tires-routing.module';

import { tiresReducer } from 'src/app/store/tires/tires.reducer';
import { TiresService } from 'src/app/services/tires.service';
import { TireComponent } from 'src/app/components/tire/tire.component';
import { TiresEffects } from 'src/app/store/tires/tires.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TireComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    TiresRoutingModule,
    StoreModule.forFeature('tires', tiresReducer),
    EffectsModule.forFeature([TiresEffects]),
  ],
  exports: [
    TireComponent
  ],
  providers: [],
})
export class TiresModule {}
