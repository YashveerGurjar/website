import { loginFail, loginStart, loginSuccess } from "./UserRedux";
import axios from "axios";
export const Loginapi = async (dispatch, user) => {
    console.log(user);
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/Auth/Login",user)
        console.log("status is ===",res.status);
        if(res.status === 200){
            dispatch(loginSuccess(res.data));
            const code = "Valid"
            return code
        }
        else if(res.status === 201){
            const code = "User";
             return code;
        }
        else {
            return false;
        }
    }
    catch (err) {
        dispatch(loginFail());
        return false
    }
}

export const Registerapi = async (dispatch, user) => {
    // console.log("data in user register",user);
    try {
        console.log("user for register",user)
        const res = await axios.post("http://localhost:5000/api/Auth/Register",user)
        console.log("res data=",res);
        if(res.status === 201){
            alert("Successfully done")
            return true
        }else if(res.status === 200){
            alert(res.data.message)
            return false

        }else{
            alert("there is an issue in server")
        }
    }
    catch (err) {
        console.log(err);
    }

    return false
}
export const Addproductsapi = async (product) => {
    console.log(product);
    try {
        const res = await axios.post("http://localhost:5000/api/product/new",product)
        console.log(res.data);
    }
    catch (err) {
        console.log(err);
    }
}