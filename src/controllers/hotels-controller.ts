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
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getAllRoomsByHotelId(req: AuthenticatedRequest, res: Response) {
    const params = req.params;
    const { userId } = req;

    try {
      const rooms = await hotelsService.getAllRoomsByHotelId(Number(params.id), userId);
  
      return res.status(httpStatus.OK).send(rooms);
    } catch (error) {
      return res.sendStatus(httpStatus.NO_CONTENT);
    }
  }