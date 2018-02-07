import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'shared/services/User/user.service';

@Component({
  selector: 'app-group-config',
  templateUrl: './group-config.component.html',
  styleUrls: ['./group-config.component.css']
})
export class GroupConfigComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.us.emitChange('CONFIGURE GROUP');

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
