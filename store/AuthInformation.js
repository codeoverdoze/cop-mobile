import React from "react";
import Database from "./Database";


class AuthInformation extends Database{
    constructor(){
        super();
    }

    async getAuthInfo(){
        return new Promise((res, rej) => {
            this.db.get("auth_information").catch(function (err) {
                if (err.name === 'not_found') {
                    return {
                        _id: "auth_information",
                        telephone: "",
                        token: ""
                    };
                } else { // hm, some other error
                    throw err;
                }
            }).then(function (authInfo) {
                res(authInfo);
            }).catch(function (err) {
                rej(err);
            });
        })
    }


    saveAuthInfo(newAuthInfo){
        return new Promise((res, rej) => {
            const self = this;
            self.db.get("auth_information").catch(function (err) {
                if (err.name === 'not_found') {
                    return {
                        _id: "auth_information",
                        telephone: "",
                        token: ""
                    };
                } else { // hm, some other error
                    throw err;
                }
            }).then(function (authInfo) {
                authInfo.telephone = newAuthInfo.telephone;
                authInfo.token = newAuthInfo.token;

                self.db.put(authInfo)
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

     checkAuthInfoValidity(){
        return new Promise(async (res, rej) => {
            try{
                const authInfo = await this.getAuthInfo();

                if(authInfo.telephone){
                    res(true)
                }else{
                    res(false)
                }
            }catch (e) {
                rej(e)
            }
        })
    }


     removeAuthInfo(){
        return new Promise(async (res, rej) => {
            const self = this;
            self.db.get("auth_information")
                .then(authInfo => {
                    self.db.remove(authInfo)
                        .then(() => {
                            res();
                        })
                })
                .catch(e => {
                    rej(e);
                })
        })
    }
}


const authInformationInstance = new AuthInformation();

export default authInformationInstance;