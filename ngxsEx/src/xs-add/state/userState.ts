import { User } from "../model/user";
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUser, UpdateUserAge } from "../action/userAction";

export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})

export class UserState {

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }

    @Action(AddUser)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

    @Action(UpdateUserAge)
    updateAgee({getState, patchState }: StateContext<UserStateModel>, { payload }: UpdateUserAge) {
        const state = getState();
        var newUser = Object.assign({},state.users[state.users.length-1],{ age : payload});
        patchState({
            users: [...state.users.slice(0,state.users.length-1), newUser]
        });
    }
}