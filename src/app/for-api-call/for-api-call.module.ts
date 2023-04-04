import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForApiCallRoutingModule } from './for-api-call-routing.module';
import { ApiCallComponent } from './api-call/api-call.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ApiCallComponent],
  imports: [CommonModule, ForApiCallRoutingModule, MatTableModule],
})
export class ForApiCallModule {}
