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
exports.getPostById = exports.createPostService = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
const userModel_1 = require("../models/userModel");
const userService_1 = require("./userService");
const createPostService = (post) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, author } = post;
        const myUser = yield (0, userService_1.getUserById)(author);
        if (!myUser)
            throw new Error('author not found!');
        const dbPost = new postModel_1.default({ title, content, author });
        yield dbPost.save();
        const user = yield userModel_1.userModel.findByIdAndUpdate(author, { $push: { posts: dbPost._id } });
        return yield (0, exports.getPostById)(dbPost.id);
    }
    catch (error) {
        throw error;
    }
});
exports.createPostService = createPostService;
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield postModel_1.default.findById(id);
    }
    catch (error) {
        throw error;
    }
});
exports.getPostById = getPostById;
