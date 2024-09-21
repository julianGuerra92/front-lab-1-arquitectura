import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GetFlightsResponse } from "../interface/vuelosApi.interface";

interface Props {
   flights: GetFlightsResponse[];
}

export const TableFlights = ({ flights }: Props) => {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 600 }} aria-label="a dense table">
            <TableHead>
               <TableRow>
                  <TableCell sx={{fontWeight: 'bold'}}>Origin</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Destination</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Date</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Price</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Baggage type</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Class type</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Max. number of passengers</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {flights.map((row) => (
                  <TableRow
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell>{row.origin}</TableCell>
                     <TableCell>{row.destination}</TableCell>
                     <TableCell>{row.date}</TableCell>
                     <TableCell>{row.price}</TableCell>
                     <TableCell>{row.baggageType}</TableCell>
                     <TableCell>{row.classType}</TableCell>
                     <TableCell>{row.maxNumberPassengers}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );

}