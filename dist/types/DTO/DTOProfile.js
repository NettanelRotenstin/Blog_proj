"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DTOPrfl = new mongoose_1.Schema({
    bio: {
        type: String,
        default: ''
    },
    socialLinks: {
        type: [String],
        default: []
    }
});
exports.default = DTOPrfl;
