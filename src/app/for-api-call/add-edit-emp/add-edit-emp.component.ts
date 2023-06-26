import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  empForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      name: '',
      image: '',
      type: '',
      status: '',
    });
  }
  // onsave
  onSave() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }

  userType: string[] = ['User', 'Admin', 'Organization', 'Super User'];

  ngOnInit(): void {
    // this.empForm.patchValue(this.data);
    // res:Number= {this.data.site_admin=false?0:1}

    this.empForm.patchValue({
      name: this.data.login,
      image: this.data.avatar_url,
      type: this.data.type,
      status: this.data.site_admin,
    });
    console.table(this.data);
  }
}
