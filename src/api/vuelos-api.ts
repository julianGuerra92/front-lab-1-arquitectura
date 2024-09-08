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
      params += `&maxPrice=${request.maxPrice}`;
   }
   const response = await axios.get<GetFlightsResponse[]>(`${baseURL}?${params}`);
   return response.data;
}