import React from "react";
import Database from "./Database";


class PersonalInformation extends Database{
    constructor(){
        super();
        // Employing the singleton pattern to ensure only one instance of Bible
        if(!PersonalInformation.instance){
            PersonalInformation.instance = this;
        }

        return PersonalInformation.instance;
    }


    ping(){
        console.log("Pinging DB");
        this.db.info().then(info => {
            console.log(info)
        }).catch(e => {
            throw new Error(e)
        })
    }

    async saveInfo(info){
        return new Promise((res, rej) => {

        })
    }


    async getPersonalInfo(){
        return new Promise((res, rej) => {
            this.db.get('personal_information').catch(function (err) {
                if (err.name === 'not_found') {
                    return {
                        _id: 'personal_information',
                        firstName: "",
                        otherNames: "",
                        telephone: "",
                        gender: ""
                    };
                } else { // hm, some other error
                    throw err;
                }
            }).then(function (personalInfo) {
                res(personalInfo);
            }).catch(function (err) {
                rej(e);
            });
        })
    }

}

const personalInformationInstance = new PersonalInformation();
export default personalInformationInstance;