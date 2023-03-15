import { Request, Response, Router } from "express";
import { productsRepository } from "../repositories/products-repository";
import { StatusCodes } from "http-status-codes";

export const productsRouter = Router({});

let productsList = productsRepository.getProducts();

productsRouter.get("/", (req: Request, res: Response) => {
  const products = productsList;
  if (req.query.title) {
    let searchString = req.query.title.toString();
    const filteredByTitleProducts = products.filter(
      (el) => el.title.indexOf(searchString) > -1
      // el.title.includes(searchString)
    );
    res.send(filteredByTitleProducts);
  } else {
    res.send(products);
  }
});

productsRouter.get("/:id", (req: Request, res: Response) => {
  const chosenProduct = productsList.find(
    (product) => product.id === req.params.id
  );

  if (!chosenProduct) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Product with such id is not found" });
  }

  res.status(StatusCodes.OK).json(chosenProduct);
});

productsRouter.delete("/:id", (req: Request, res: Response) => {
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].id === req.params.id) {
      productsList.splice(i, 1);
      res.sendStatus(StatusCodes.NO_CONTENT);
      return;
    }
  }
  res.sendStatus(StatusCodes.NOT_FOUND);
});

productsRouter.post("/", (req: Request, res: Response) => {
  const newProduct = productsRepository.createProduct(req.body.title);
  if (newProduct) {
    res.set({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    res.status(StatusCodes.CREATED).send(newProduct);
  } else {
    res.sendStatus(StatusCodes.NOT_FOUND);
  }
});

productsRouter.put("/:id", (req: Request, res: Response) => {
  const productToBeUpdated = productsList.find((el) => el.id === req.params.id);
  if (!productToBeUpdated) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Product with such id is not found" });
  } else {
    productToBeUpdated.title = req.body.title;
    res.status(StatusCodes.OK).send(productToBeUpdated);
  }
});
// fetch("http://localhost:3000/products").then(res => res.json()).then(res => console.log(res))
