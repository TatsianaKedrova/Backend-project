"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../repositories/products-repository");
const http_status_codes_1 = require("http-status-codes");
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get("/", (req, res) => {
    const products = products_repository_1.productsRepository.getProducts();
    res.send(products);
});
exports.productsRouter.post("/", (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    if (newProduct) {
        res.status(201).send(newProduct);
    }
    else {
        res.sendStatus(http_status_codes_1.StatusCodes.NOT_FOUND);
    }
    const products = products_repository_1.productsRepository.getProducts();
    res.send(products);
});
