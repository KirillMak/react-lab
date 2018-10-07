import { ACTIONS } from '../constants/ActionTypes';

export const addCurrentUser = (user) => ({
    type: ACTIONS.ADD_CURRENT_USER,
    user
})

export const setUsers = (users) => ({
    type: ACTIONS.SET_USERS,
    users
})