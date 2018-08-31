import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { AddBook } from '../../../xs-add/action/bookAction';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder,private store:Store,private route: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      bookname: ['', Validators.required ],
      author: ['', Validators.required ]
   });
  }

  createBook(bookname, author) {
    console.log(bookname, author);
    this.store.dispatch(new AddBook({ bookname, author}));
    this.route.navigate(['age-update']);
  }

  ngOnInit() {
  }
}
