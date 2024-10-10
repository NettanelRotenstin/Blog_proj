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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserByName = exports.createUserService = void 0;
const userModel_1 = require("../models/userModel");
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, profile } = user;
        const dbUser = new userModel_1.userModel({
            username, email, profile
        });
        yield dbUser.save();
        return yield (0, exports.getUserByName)(username);
    }
    catch (error) {
        throw error;
    }
});
exports.createUserService = createUserService;
const getUserByName = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield userModel_1.userModel.findOne({ username });
    }
    catch (error) {
        throw error;
    }
});
exports.getUserByName = getUserByName;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel_1.userModel.find({});
});
exports.getAllUsers = getAllUsers;
