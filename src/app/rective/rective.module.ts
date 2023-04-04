import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RectiveRoutingModule } from './rective-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveComponent],
  imports: [
    CommonModule,
    RectiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RectiveModule {}
