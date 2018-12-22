import axios from "axios";
import { showMessage } from "react-native-flash-message";

const loginRoute = "https://pcg-api-mobile.herokuapp.com/api/v1/user/login";
const verifySMSRoute = "https://pcg-api-mobile.herokuapp.com/api/v1/user/login/verify";


const login = (telephone) => {
    return new Promise(async (res, rej) => {
        try{
            const response = await axios.post(loginRoute,
                {telephone});
            res(response.data);
        }catch (e) {
            showMessage({
                message: "Ooops",
                description: "An error occurred while sending you your verification code",
                type: "warning",
                duration: 5000
            });
            rej(e);
        }
    })
};


const verifySMSCode = (telephone, code) => {
    return new Promise(async (res, rej) => {
        try{
            const response = await axios.post(verifySMSRoute, { telephone, code })
            res(response.data);
        }catch (e) {
            if(e.response.status === 404){
                showMessage({
                    message: "Wrong verification code",
                    description: "The verification code you entered is incorrect, please try again or check your number",
                    type: "error",
                    duration: 5000
                });
            }

            rej();
        }
    })
};


export { login, verifySMSCode }