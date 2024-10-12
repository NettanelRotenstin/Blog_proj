"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const db_1 = __importDefault(require("./config/db"));
const cookieParser = require("cookie-parser");
const swaggerUi = require('swagger-ui-express');
const swager_express_1 = require("./config/swager-express");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
(0, db_1.default)();
app.use(cookieParser());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swager_express_1.specs));
// Routes
app.use("/api/auth", postRoutes_1.default);
app.use("/api/posts", postRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
// Error handling middleware
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
