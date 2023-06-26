import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForApiCallRoutingModule } from './for-api-call-routing.module';
import { ApiCallComponent } from './api-call/api-call.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApiCallComponent, AddEditEmpComponent],
  imports: [
    CommonModule,
    ForApiCallRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ForApiCallModule {}
