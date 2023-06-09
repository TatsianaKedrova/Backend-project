"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../repositories/products-repository");
const http_status_codes_1 = require("http-status-codes");
exports.productsRouter = (0, express_1.Router)({});
let productsList = products_repository_1.productsRepository.getProducts();
exports.productsRouter.get("/", (req, res) => {
    const products = productsList;
    if (req.query.title) {
        let searchString = req.query.title.toString();
        const filteredByTitleProducts = products.filter((el) => el.title.indexOf(searchString) > -1
        // el.title.includes(searchString)
        );
        res.send(filteredByTitleProducts);
    }
    else {
        res.send(products);
    }
});
exports.productsRouter.get("/:id", (req, res) => {
    const chosenProduct = productsList.find((product) => product.id === req.params.id);
    if (!chosenProduct) {
        res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: "Product with such id is not found" });
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(chosenProduct);
});
exports.productsRouter.delete("/:id", (req, res) => {
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].id === req.params.id) {
            productsList.splice(i, 1);
            res.sendStatus(http_status_codes_1.StatusCodes.NO_CONTENT);
            return;
        }
    }
    res.sendStatus(http_status_codes_1.StatusCodes.NOT_FOUND);
});
exports.productsRouter.post("/", (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    if (newProduct) {
        res.set({
            "Content-Type": "application/json",
            Accept: "application/json",
        });
        res.status(http_status_codes_1.StatusCodes.CREATED).send(newProduct);
    }
    else {
        res.sendStatus(http_status_codes_1.StatusCodes.NOT_FOUND);
    }
});
exports.productsRouter.put("/:id", (req, res) => {
    const productToBeUpdated = productsList.find((el) => el.id === req.params.id);
    if (!productToBeUpdated) {
        res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: "Product with such id is not found" });
    }
    else {
        productToBeUpdated.title = req.body.title;
        res.status(http_status_codes_1.StatusCodes.OK).send(productToBeUpdated);
    }
});
// fetch("http://localhost:3000/products").then(res => res.json()).then(res => console.log(res))
//# sourceMappingURL=products-router.js.map