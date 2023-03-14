export type ProductType = {
  id: string;
  title: string;
};

let products: ProductType[] = [
  { id: "1", title: "mango" },
  { id: "2", title: "lemon" },
  { id: "3", title: "watermelon" },
  { id: "4", title: "apple" },
  { id: "5", title: "cherry" },
];

export const productsRepository = {
  getProducts(): ProductType[] {
    return products;
  },
  createProduct(title: string): ProductType | null {
    if (!title.trim()) {
      return null;
    }
    const newProduct: ProductType = {
      id: new Date().toString(),
      title,
    };

    products.unshift(newProduct);
    return newProduct;
  },
};
