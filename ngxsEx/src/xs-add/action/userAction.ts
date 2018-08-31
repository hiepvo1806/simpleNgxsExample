import { User } from "../model/user";


export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}

export class UpdateUserAge {
    static readonly type = '[User] Update age';

    constructor(public payload: number) {}
}