import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66268f52076301597b13"); 

export const account = new Account(client);
export const databases = new Databases(client);
