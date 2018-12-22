import React from "react";
import { AsyncStorage } from "react-native";

class AuthInformation {
    constructor(){
        this.authInformation = null;
    }


    async getAuthInformation(){
        return new Promise(async (res, rej) => {
            try{
                this.authInformation = await AsyncStorage.getItem("authInformation");
                if(this.authInformation){
                    // Parsing to JSON object
                    this.authInformation = JSON.parse(this.authInformation);
                    res(this.authInformation);
                }else{
                    res(null);
                }
            }catch(e){
                rej("Error while loading personal information : " + e)
            }
        })
    }

    setAuthInformation(object){
        return new Promise(async (res, rej) => {
            const { telephone } = object;
            if(!telephone) throw new Error("Please provide a telephone key in object");

            try{
                AsyncStorage.setItem("authInformation", JSON.stringify({telephone}));
                res();
            }catch (e) {
                rej("Failed to save new auth information  " + e)
            }
        })
    }

    nukeAuthInformation(){
        return new Promise(async (res, rej) => {
            try{
                AsyncStorage.removeItem("authInformation");
                res()
            }catch (e) {
                rej("Failed to nuke auth information")
            }
        })
    }
}


const authInformationInstance = new AuthInformation();

export default authInformationInstance;