import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CancelDialogComponent } from '../cancel-dialog.component';
interface department {
  value?: string;
  name?: string;
  degree?: string;
}

 
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})


export class AddUserComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _router: Router,
            private _matDialog: MatDialog) { }

  

  /* user form department field value (interface:department)*/
  departments: department[] =
    [
      { value: 'it', name: 'IT' },
      { value: 'ce', name: 'CE' },
      { value: 'me', name: 'ME' },
      { value: 'ec', name: 'EC' },
    ]

/* user form degree field value (interface:department)*/
  degree: department[] =
    [
      { degree: 'B.Tech.' },
      { degree: 'M.Tech.' },
      { degree: 'B.E.' },
      { degree: 'M.E.' },
    ]

  personalDetailsFormGroup: FormGroup;
  academicDetailsFormGroup: FormGroup;
  emailControl: FormControl;
  ngOnInit() {
    this.personalDetailsFormGroup = new FormGroup(
      {
        userNameControl: new FormControl('', Validators.required),
        emailControl: new FormControl('', [Validators.required, Validators.email]),
        //genderControl: new FormControl('', Validators.required)
        dobControl: new FormControl('', Validators.required)
       }
    );
  }

 
  openDialog() {
    //this._router.navigateByUrl('/users');
    this._matDialog.open(CancelDialogComponent);
  }
}


