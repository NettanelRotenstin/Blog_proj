"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginServise = void 0;
const userModel_1 = require("../models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginServise = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbUser = yield userModel_1.userModel.findOne({ username: user.username });
        if (!dbUser)
            throw new Error("user not found");
        const userPass = user.password || " ";
        const dbUserPass = dbUser.password || " ";
        if (!(yield bcrypt_1.default.compare(userPass, dbUserPass))) {
            throw new Error("wrong password");
        }
        const token = yield jsonwebtoken_1.default.sign({ user_name: dbUser.username, email: dbUser.email, id: dbUser._id }, process.env.TOKEN_SECRET);
        return token;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.loginServise = loginServise;
