import { Request, Response, Router } from "express";
import { productsRepository } from "../repositories/products-repository";
import { StatusCodes } from "http-status-codes";

export const productsRouter = Router({});

let productsList = productsRepository.getProducts();

productsRouter.get("/", (req: Request, res: Response) => {
  const products = productsList;
  res.send(products);
});

productsRouter.get("/:id", (req: Request, res: Response) => {
  const chosenProduct = productsList.find(
    (product) => product.id === req.params.id
  );
  res.status(StatusCodes.OK).json(chosenProduct);
});

productsRouter.post("/", (req: Request, res: Response) => {
  const newProduct = productsRepository.createProduct(req.body.title);
  if (newProduct) {
    res.status(StatusCodes.CREATED).send(newProduct);
  } else {
    res.sendStatus(StatusCodes.NOT_FOUND);
  }
  const products = productsList;
  res.send(products);
});
