export type TAddressType = {
  id: string;
  value: string;
};

let addresses: TAddressType[] = [
  { id: "1", value: "sovetskaya 45" },
  { id: "3", value: "street 66" },
  { id: "4", value: "apple street" },
  { id: "5", value: "cherry street" },
  { id: "2", value: "lemon street" },
  { id: "7", value: "street of the world" },
];

export const addressesRepository = {
  getAllAddresses(): TAddressType[] {
    return addresses;
  },
  getParticularAddress(paramsId: string): TAddressType | null {
    const address = addresses.find((element) => element.id === paramsId);
    if (address) {
      return address;
    } else return null;
  },
  addNewAddress(value: string): TAddressType | null {
    if (!value.trim()) {
      return null;
    }
    const newAddress: TAddressType = {
      id: new Date().toString(),
      value,
    };

    addresses.unshift(newAddress);
    return newAddress;
  },
};
