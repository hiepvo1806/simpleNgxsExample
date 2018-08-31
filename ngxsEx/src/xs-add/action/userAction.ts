import { User } from "../model/user";


export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}