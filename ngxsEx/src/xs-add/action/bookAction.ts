import { Book } from "../model/book";


export class AddBook {
    static readonly type = '[Book] Add';

    constructor(public payload: Book) { }
}
