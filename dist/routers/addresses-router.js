"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const addresses_repository_1 = require("./../repositories/addresses-repository");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
exports.addressesRouter = (0, express_1.Router)({});
exports.addressesRouter.get("/", (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json(addresses_repository_1.addressesRepository.getAllAddresses());
});
exports.addressesRouter.get("/:id", (req, res) => {
    const particularAddress = addresses_repository_1.addressesRepository.getParticularAddress(req.params.id);
    if (!particularAddress) {
        res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: "There is no address with such ID" });
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(particularAddress);
});
//# sourceMappingURL=addresses-router.js.map