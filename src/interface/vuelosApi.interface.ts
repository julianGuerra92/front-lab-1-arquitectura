

export interface GetFlightsRequest {
   startDate: string;
   endDate: string;
   origin?: string;
   destination?: string;
   maxPrice?: number;
   baggageType: string;
   classType: string;
   maxNumberPassengers: number;
}

export interface GetFlightsResponse {
   id:          number;
   origin:      string;
   destination: string;
   date:        string;
   price:       number;
   baggageType: string;
   classType: string;
   maxNumberPassengers: number;

}
