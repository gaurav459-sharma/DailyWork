const isAuth = localStorage.getItem("currentUser")
    ? true
    : false;
const userDetails = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : "";
console.log(userDetails);
export const initialState = {
    auth : isAuth,
    userDetails: userDetails,
    available:false,
    loading: false,
    errorMessage: null
}

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                auth : action.payload,
                loading: false
            };
        case "SET_DETAILS":
            return {
                ...initialState,
                userDetails: action.payload,
                loading: false
            };
        case "SET_AVAILABILITY":
            return {
                ...initialState,
                available : action.payload
            };
        case "LOGOUT":
            return {
                ...initialState,
                auth : false,
                userDetails: ""
            };
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
};