import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { UpdateUserAge } from '../../../xs-add/action/userAction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update2-comp',
  templateUrl: './update2-comp.component.html',
  styleUrls: ['./update2-comp.component.css']
})
export class Update2CompComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,private store:Store, private router:Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      age: ['', Validators.required ]
   });
  }

  updateAge(age) {
    console.log(age);
    this.store.dispatch(new UpdateUserAge(age));
    this.router.navigate(['input-comp']);
  }

  ngOnInit() {
  }

}
