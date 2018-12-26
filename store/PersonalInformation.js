import React from "react";
import { AsyncStorage } from "react-native";

class PersonalInformation {
    constructor(){

    }
    
    async setPersonalInformation(item){
        console.log("item", item);
        return new Promise(async (res, rej) => {
            // Loading personal information from DB if any
            try{
                let personalInformation = await AsyncStorage.getItem("personalInformation");

                // Checking string too cos of some weird inconsistency with the key-value store
                if(!personalInformation || personalInformation === "null"){
                    // When personal info is null, turning into object and adding key
                    console.log("Personal info is null");
                    personalInformation = {};
                    personalInformation[item.name] = item.value;
                    console.log("Before leaving branch checking personal information", personalInformation);
                }else{
                    personalInformation = JSON.parse(personalInformation);
                    personalInformation[item.name] = item.value;
                }

                console.log("personal Information", personalInformation);
                await AsyncStorage.setItem("personalInformation", JSON.stringify(personalInformation));

                const personalInfo = await this.getPersonalInformation();
                console.log(personalInfo);
                res();
            }catch (e) {
                rej("Error occurred while saving item to db" + e)
            }
        })
    }
    
    
    async getPersonalInformation(){
        return new Promise(async (res, rej) => {
            try{
                const value = await AsyncStorage.getItem("personalInformation");
                res(JSON.parse(value));
            }catch (e) {
                rej("Error occurred while getting " + item + "in storage  " + e);
            }
        })
    }

    async removePersonalInformation(){
        return new Promise(async (res, rej) => {
            try{
                await AsyncStorage.removeItem("personalInformation");
                console.log("Personal info flushed");
                res();
            }catch (e) {
                rej("Error while deleting app keys" + e);
            }
        })
    }
}

const personalInformationInstance = new PersonalInformation();
export default personalInformationInstance;