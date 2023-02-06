import { notFoundError, paymentRequiredError, unauthorizedError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import hotelsRepository from "@/repositories/hotels-repository";
import ticketService from "@/services/tickets-service";

async function verifyHotelTicket(userId: number) {
  const ticket = await ticketService.getTicketByUserId(userId);
  
  if (!ticket) {
    throw notFoundError();
  }
  const enrollment = await enrollmentRepository.findById(ticket.enrollmentId);
  
  if (enrollment.userId !== userId) {
    throw unauthorizedError();
  }
  if (!enrollment) {
    throw notFoundError();
  }

  if(ticket.status === "RESERVED" || ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) {
    throw paymentRequiredError();
  }
}

async function getAllHotels(userId: number) {
  await verifyHotelTicket(userId);  
  const hotels = await hotelsRepository.findAllHotels();

  if (!hotels) {
    throw notFoundError();
  }
  return hotels;
}

async function getAllRoomsByHotelId(hotelId: number, userId: number) {
  await verifyHotelTicket(userId);
  const rooms = await hotelsRepository.findRoomsByHotelId(hotelId);
  
  if (!rooms) {
    throw notFoundError();
  }
  return rooms;
}

const hotelsService = {
  getAllHotels,
  getAllRoomsByHotelId,
  verifyHotelTicket
};
  
export default hotelsService;
  
