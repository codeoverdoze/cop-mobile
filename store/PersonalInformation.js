import React from "react";
import { AsyncStorage } from "react-native";

class PersonalInformation {
    constructor() {
        // Loading personal information details from AsyncStorage
        let personalInformation = null;

        (async function () {
            try{
                personalInformation = await AsyncStorage.getItem("personalInformation");
            }catch(e){
                throw new Error("Error while loading personal information : " + e)
            }
        })();


        if(!personalInformation){
            this.personalInformation = {
                surname: "",
                otherNames: "",
                gender: "",
                phone: "",
                email: ""
            }
        }else{
            this.personalInformation = personalInformation;
        }
    }


    setPersonalInformation(personalInformation){
        const { surname, otherNames, gender, phone, email } = personalInformation;
        this.personalInformation.surname = surname;
        this.personalInformation.otherNames = otherNames;
        this.personalInformation.gender = gender;
        this.personalInformation.phone = phone;
        this.personalInformation.email = email;
    }


    async savePersonalInformation(){
        try{
            await AsyncStorage.setItem("personalInformation");
        }catch(e){
            throw new Error("Error while saving personal information  :" + e)
        }
    }
}

export default PersonalInformation;