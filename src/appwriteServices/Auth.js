import { Client,Account,ID } from "appwrite";
import config from "../config/config";

class AuthServices {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
         const userAccount =  await this.account.create(ID.unique(), email, password,name);
         if(userAccount) {
            // return userAccount;
            return this.login({email,password});
         }else {
            return userAccount;
         }
        } catch (e) {
           console.log("error occurred in create account",e);
        }
    }
    
    async login({email, password}) {
        try {
          return  await this.account.createEmailPasswordSession(email,password);
        }catch(e) {
            console.log("error occurred in login",e);
        }
    }

    async getCurrentUser() {
        try {
            if(!this.account) {
                return null;
            }
          return  await this.account.get();
        } catch (error) {
            console.log("error occurred in get current user",error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("error occurred in logout",error);
        }
    }
}

const authService = new AuthServices();

export default authService;