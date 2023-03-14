"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRepository = void 0;
let addresses = [
    { id: "1", value: "sovetskaya 45" },
    { id: "3", value: "street 66" },
    { id: "4", value: "apple street" },
    { id: "5", value: "cherry street" },
    { id: "2", value: "lemon street" },
    { id: "7", value: "street of the world" },
];
exports.addressesRepository = {
    getAllAddresses() {
        return addresses;
    },
    getParticularAddress(paramsId) {
        const address = addresses.find((element) => element.id === paramsId);
        if (address) {
            return address;
        }
        else
            return null;
    },
    addNewAddress(value) {
        if (!value.trim()) {
            return null;
        }
        const newAddress = {
            id: new Date().toString(),
            value,
        };
        addresses.unshift(newAddress);
        return newAddress;
    },
};
//# sourceMappingURL=addresses-repository.js.map