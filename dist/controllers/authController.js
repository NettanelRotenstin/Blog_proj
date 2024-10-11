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
const authService_1 = require("../service/authService");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield (0, authService_1.loginServise)(req.body);
        res.cookie("token", token);
        res.json({
            msg: `welcome ${req.body.username}! so good to see you again!!`,
        });
    }
    catch (err) {
        res.status(400).send('token is faild');
    }
});
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("token");
        res.status(200).json({ msg: 'you logged out!' });
    }
    catch (err) {
        res.sendStatus(500);
    }
});
module.exports = {
    login,
    logout
};
