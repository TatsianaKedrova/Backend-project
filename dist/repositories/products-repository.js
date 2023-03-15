"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
let products = [
    { id: "1", title: "mango" },
    { id: "10", title: "mango" },
    { id: "11", title: "mango" },
    { id: "13", title: "mango" },
    { id: "2", title: "lemon" },
    { id: "3", title: "watermelon" },
    { id: "4", title: "apple" },
    { id: "5", title: "cherry" },
    { id: "15", title: "orange" },
    { id: "7", title: "My job is to be happy and satisfied!!!" },
];
exports.productsRepository = {
    getProducts() {
        return products;
    },
    createProduct(title) {
        if (!title || !title.trim()) {
            return null;
        }
        const newProduct = {
            id: new Date().toString(),
            title,
        };
        products.unshift(newProduct);
        return newProduct;
    },
};
//# sourceMappingURL=products-repository.js.map