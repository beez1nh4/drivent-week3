import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";


async function getAllHotels() {

  const hotels = await hotelsRepository.findAllHotels();

  if (!hotels) {
    throw notFoundError();
  }
  return hotels;
}

async function getAllRoomsByHotelId(hotelId: number) {

    const rooms = await hotelsRepository.findRoomsByHotelId(hotelId);
  
    if (!rooms) {
      throw notFoundError();
    }
    return rooms;
  }

const hotelsService = {
    getAllHotels,
    getAllRoomsByHotelId
  };
  
  export default hotelsService;
  