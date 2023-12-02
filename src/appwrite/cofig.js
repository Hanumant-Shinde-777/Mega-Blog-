import { Service } from 'appwrite/types/service.js';
import conf from '../conf/conf.js';
import {Client, ID, Databases, Storage, Query} from "appwrite";


 export class Service{
Client = new Client();
databases;
bucket;
constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.databases = Databases(this.client);
    this.bucket = new Storage(this.client);
    
}
 }

const service = new Service()
 export default service