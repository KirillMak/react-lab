import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    users: [{id: 1, username: "Petr", surname: "Alexandrov" },{id: 2, username: "Ivan", surname: "Alexandrov" }]
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.SET_USERS:
            return {...state, users: state.users.concat(action.users) }
        default: 
            return state;
    }
}