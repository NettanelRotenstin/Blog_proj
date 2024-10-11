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
exports.deletePostService = exports.updatePostService = exports.getAllPosts = exports.getPostById = exports.createPostService = void 0;
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
        yield userModel_1.userModel.findByIdAndUpdate(author, { $push: { posts: dbPost._id } });
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
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield postModel_1.default.find({});
});
exports.getAllPosts = getAllPosts;
const updatePostService = (id, postToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    yield postModel_1.default.findByIdAndUpdate(id, postToUpdate);
    return yield (0, exports.getPostById)(id);
});
exports.updatePostService = updatePostService;
const deletePostService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield postModel_1.default.deleteOne({ _id: id });
        yield userModel_1.userModel.updateOne({ posts: id }, { $pull: { posts: id } });
    }
    catch (err) {
        throw err;
    }
});
exports.deletePostService = deletePostService;
// export const addCommentService = async (comment: IComment): Promise<void> => {
//     try {
//         const { content,author,createdAt } = comment
//         const myUser: User | unknown = await getUserById(author)
//         if (!myUser) throw new Error('author not found!')
//         const dbPost = new postModel({ title, content, author })
//         await dbPost.save()
//         await userModel.findByIdAndUpdate(author, { $push: { posts: dbPost._id } })
//         return await getPostById(dbPost.id)
//     } catch (error) {
//         throw error
//     }
// }
