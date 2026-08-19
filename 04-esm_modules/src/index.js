//import connectToDabase from "./utils/database.mjs";
import * as database from "./utils/database.mjs";

import {getDataFromApi} from './utils/api.js';


database.connectToDabase("MyDataBase");
database.disconnectDatabase();
database.databaseType;
console.log("");
getDataFromApi();