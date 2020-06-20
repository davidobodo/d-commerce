import * as actionTypes from "../../constants/action_types";

interface UserState {
    isLoading: boolean;
    error: unknown;
    data: unknown;
}

interface Action {
    type: string;
    payload: unknown;
}

const initialState: UserState = {
    isLoading: false,
    error: null,
    data: null,
};

const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_USER_DATA_START:
            return;
        default:
            return state;
    }
};

export default userReducer;
