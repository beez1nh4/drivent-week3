import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";

import { Response } from "express";
import httpStatus from "http-status";

export async function getAllHotels(req: AuthenticatedRequest, res: Response) {

  try {
    const allHotels = await hotelsService.getAllHotels();

    return res.status(httpStatus.OK).send(allHotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}