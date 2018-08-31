import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Book } from "../model/book";
import { AddBook } from '../action/bookAction';
import { UserState } from './userState';

export class BookStateModel {
    books: Book[];
}

@State<BookStateModel>({
    name: 'books',
    defaults: {
        books: []
    }
})

export class BookState {
    constructor(private store: Store) { }

    @Action(AddBook)
    add({ getState, patchState }: StateContext<BookStateModel>, { payload }: AddBook) {
        const bookstate = getState();
        const lastestUser = this.store.selectSnapshot(UserState.getLastestUser);
        const newbook = Object.assign({}, payload, { borrower: lastestUser });
        console.log(bookstate);
        patchState({
            books: [...bookstate.books, newbook]
        });
    }
}