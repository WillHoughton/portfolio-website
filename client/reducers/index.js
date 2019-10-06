import {IS_NEW_USER} from '../actions/'


const initialState = {
    isNewUser: 'true',
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_NEW_USER:
            return { ...state, isNewUser: action.boolean }
        default:
            return state

    }
}

export default mainReducer 