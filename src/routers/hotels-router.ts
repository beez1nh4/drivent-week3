import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getAllHotels, getAllRoomsByHotelId } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/", getAllHotels)
  .get("/:id", getAllRoomsByHotelId);

export { hotelsRouter };
