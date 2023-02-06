import { AuthenticatedRequest } from "@/middlewares";

import { Response } from "express";
import httpStatus from "http-status";

export async function getAllHotels(req: AuthenticatedRequest, res: Response) {

  try {
    const allHotels = await enrollmentsService.getOneWithAddressByUserId();

    return res.status(httpStatus.OK).send(allHotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}