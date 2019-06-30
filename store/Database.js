import React from "react";
import { SQLite } from 'expo-sqlite'
import PouchDB from "pouchdb-react-native";
import SQLiteAdapterFactory from "pouchdb-adapter-react-native-sqlite";

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);
PouchDB.plugin(SQLiteAdapter);


class Database {
    constructor(){
        // We can do auto compaction cos we will never make use of syncing
        this.db = new PouchDB({
            name: "pcg",
            adapter: "react-native-sqlite",
            auto_compaction: true
        });
    }

    ping(){
        console.log("Pinging DB");
        this.db.info().then(info => {
            console.log(info)
        }).catch(e => {
            throw new Error(e)
        })
    }
}

export default Database;