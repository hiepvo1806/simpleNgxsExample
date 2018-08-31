import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from '../../xs-add/action/userAction';
@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.css']
})
export class InputCompComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,private store:Store) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  addUser(name, email) {
    console.log(name, email);
    this.store.dispatch(new AddUser({ name, email}));
  }

  ngOnInit() {
  }
}
