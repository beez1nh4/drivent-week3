import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";

import { Response } from "express";
import httpStatus from "http-status";

export async function getAllHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;  

  try {
    const allHotels = await hotelsService.getAllHotels(userId);

    return res.status(httpStatus.OK).send(allHotels);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    if (error.name === "PaymentRequiredError") {
      return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getAllRoomsByHotelId(req: AuthenticatedRequest, res: Response) {
  const params = req.params;
  const { userId } = req;

  try {
    const rooms = await hotelsService.getAllRoomsByHotelId(Number(params.id), userId);
  
    return res.status(httpStatus.OK).send(rooms);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    if (error.name === "PaymentRequiredError") {
      return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
