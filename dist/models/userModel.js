"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const validator_1 = require("validator");
const DTOProfile_1 = __importDefault(require("../types/DTO/DTOProfile"));
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, 'username is missing!'],
        min: [4, 'name too short!'],
        max: [20, 'name too long!'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is missing!'],
        validate: validator_1.isEmail,
        unique: true
    },
    profile: {
        type: DTOProfile_1.default
    },
    posts: {
        type: [mongoose_1.Types.ObjectId],
        default: [],
        ref: 'Post'
    }
});
exports.userModel = mongoose_1.default.model("User", userSchema);
