export const ADD_NEW_USER = "ADD_NEW_USER"
export const EDIT_USER = "EDIT_USER"
export const DELETE_USER = "DELETE_USER"

export const addNewUser = (payload) => {
    console.log(payload);
    return {
        type: ADD_NEW_USER,
        payload
    }
}

export const editUser = (payload) => {
    return {
        type: EDIT_USER,
        payload
    }
}

export const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    }
}