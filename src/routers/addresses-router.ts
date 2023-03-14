import { addressesRepository } from "./../repositories/addresses-repository";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

export const addressesRouter = Router({});

addressesRouter.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(addressesRepository.getAllAddresses());
});

addressesRouter.get("/:id", (req: Request, res: Response) => {
  const particularAddress = addressesRepository.getParticularAddress(
    req.params.id
  );
  if (!particularAddress) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "There is no address with such ID" });
  }
  res.status(StatusCodes.OK).json(particularAddress);
});
