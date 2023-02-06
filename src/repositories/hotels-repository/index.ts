import { prisma } from "@/config";
import { Hotel } from "@prisma/client";

async function findAllHotels(): Promise<Hotel[]> {
  return prisma.hotel.findMany();
}

async function findRoomsByHotelId(hotelId: number) {
    return prisma.hotel.findFirst({
      where: {
        id: hotelId,
      },
      include: {
        Rooms: true,
      }
    });
}

const hotelsRepository = {
  findAllHotels,
  findRoomsByHotelId
};

export default hotelsRepository;
