import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotelType() {
  return prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.abstract()
    },
  });
}

export async function createRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.name.findName(),
      capacity: faker.datatype.number({ min: 0 }),
      hotelId
    },
  });
}
