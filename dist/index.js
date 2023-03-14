"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addresses_router_1 = require("./routers/addresses-router");
const express_1 = __importDefault(require("express"));
const products_router_1 = require("./routers/products-router");
const app = (0, express_1.default)();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use("/products", products_router_1.productsRouter);
app.use("/addresses", addresses_router_1.addressesRouter);
app.get("/", (req, res) => {
    let helloMessage = "Great and creative Sherif!";
    res.send(helloMessage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map