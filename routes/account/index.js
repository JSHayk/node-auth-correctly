import express from "express";
import { DELETE_ACCOUNT, LOG_OUT } from "../../const/Router.js";
import { deleteAccount } from "./callbacks.js";

const account = express();

account.post(DELETE_ACCOUNT, deleteAccount);

export default account;