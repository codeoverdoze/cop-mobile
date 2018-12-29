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

    async savePersonalInfo(newPersonalInfo){
        return new Promise((res, rej) => {
            const self = this;
            self.db.get("personal_information").catch(function (err) {
                if (err.name === 'not_found') {
                    return {
                        _id: 'personal_information',
                        surname: "",
                        otherNames: "",
                        phone: "",
                        gender: "",
                        email: ""
                    };
                } else { // hm, some other error
                    throw err;
                }
            }).then(function (personalInfo) {
                Object.assign(personalInfo, newPersonalInfo);

                self.db.put(personalInfo)
                    .then(() => {
                        res();
                    })
                    .catch(e => {
                        rej(e);
                    })
            }).catch(function (err) {
                rej(err);
            });
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
                rej(err);
            });
        })
    }

}

const personalInformationInstance = new PersonalInformation();
export default personalInformationInstance;