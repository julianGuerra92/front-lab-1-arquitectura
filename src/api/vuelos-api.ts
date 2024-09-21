import { GetFlightsRequest, GetFlightsResponse } from '@/interface/vuelosApi.interface';
import axios from 'axios';

const baseURL = 'http://localhost:8080/api/flights/search'


export const getFlights = async (request: GetFlightsRequest): Promise<GetFlightsResponse[]> => {
   let params = `startDate=${request.startDate}&endDate=${request.endDate}`;
   if (request.origin && request.origin.length > 0) {
      params += `&origin=${request.origin}`;
   }
   if (request.destination && request.destination.length > 0) {
      params += `&destination=${request.destination}`;
   }
   if (request.maxPrice && request.maxPrice > 0) {
      params += `&price=${request.maxPrice}`;
   }
   if (request.baggageType && request.baggageType.length > 0) {
      params += `&baggageType=${request.baggageType}`;
   }
   if (request.classType && request.classType.length > 0) {
      params += `&classType=${request.classType}`;
   }
   if (request.maxNumberPassengers && request.maxNumberPassengers > 0) {
      params += `&maxNumberPassengers=${request.maxNumberPassengers}`;
   }
   const response = await axios.get<GetFlightsResponse[]>(`${baseURL}?${params}`);
   return response.data;
}