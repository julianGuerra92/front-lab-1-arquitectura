

export interface GetFlightsRequest {
   startDate: string;
   endDate: string;
   origin?: string;
   destination?: string;
   maxPrice?: number;
}

export interface GetFlightsResponse {
   id:          number;
   origin:      string;
   destination: string;
   date:        string;
   price:       number;
}
