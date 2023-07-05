import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});

export const loginUSer = async (dispatch, loginDetails) => {
    try {
        // console.log(loginDetails);
        console.log("loginUSer called");
        dispatch({ type: "REQUEST_LOGIN" });
        console.log("dispatch called");
        let response = await client.post('/signin', loginDetails);
        // console.log(response);
        if (response.status === 200) {
            dispatch({type : "LOGIN_SUCCESS", payload : true});
            await setUserDetails(dispatch, loginDetails.email);
            return response;
        }

        dispatch({ type: 'LOGIN_ERROR', error: response.data });
        alert(response.data);
        return;
    } catch (error) {
        alert(error);
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}
  
export const logout = async (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userDetails");
}

export const setUserDetails = async (dispatch, email) => {
    try {
        let response = await client.get(`/personal/${email}`);
        let data = response.data;
        if (response.status === 200) {
            dispatch({ type: "SET_DETAILS", payload: data });
            localStorage.setItem("userDetails", JSON.stringify(data));
            return;
        }
        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}