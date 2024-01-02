/* eslint-disable prettier/prettier */
import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';
const appwriteClient = new Client();
const appwrite_Endpoint: string = Config.APPWRITE_ENDPOINT!;
const appwrite_Project_Id: string = Config.APPWRITE_PROJECT_ID!;
type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};
type LoginUserAccount = {
  email: string;
  password: string;
};

class appwriteauth {
  account;
  constructor() {
    appwriteClient
      .setEndpoint(appwrite_Endpoint)
      .setProject(appwrite_Project_Id);
    this.account = new Account(appwriteClient);
  }

  async CreateAccount({email, password, name}: CreateUserAccount) {
    try {
      const UserAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (UserAccount) {
        return this.login({email, password});
      } else {
        return UserAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('AppWrite Servie:: CreateAccount()' + error);
    }
  }
  async login({email, password}: LoginUserAccount) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('AppWrite Servie:: Login()' + error);
    }
  }
  async GetCurrentSession() {
    try {
      return await this.account.get();
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('AppWrite Servie:: GetcurrentSession()' + error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      console.log('AppWrite Servie:: GetcurrentSession()' + error);
    }
  }
}
export default appwriteauth;
