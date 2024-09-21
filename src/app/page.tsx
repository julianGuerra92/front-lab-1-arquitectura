'use client'

import { useState } from "react";
import styles from "./page.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, FormControlLabel, Checkbox, Button } from "@mui/material";
import { getFlights } from "../api/vuelos-api";
import { GetFlightsResponse } from "../interface/vuelosApi.interface";
import { TableFlights } from "../components/table-flights";

export default function Home() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [baggageType, setBaggageType] = useState('');
  const [classType, setClassType] = useState('');
  const [maxNumberPassengers, setMaxNumberPassengers] = useState(0);

  const [flights, setFlights] = useState<GetFlightsResponse[]>([]);

  const [checkedState, setCheckedState] = useState({
    origin: false,
    destination: false,
    maxPrice: false,
    baggageType: false,
    classType: false,
    maxNumberPassengers: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    if (!checked) {
      switch (name) {
        case 'origin':
          setOrigin('');
          break;
        case 'destination':
          setDestination('');
          break;
        case 'maxPrice':
          setMaxPrice(0);
          break;
        case 'baggageType':
          setBaggageType('');
          break;
        case 'classType':
          setClassType('');
          break;
        case 'maxNumberPassengers':
          setMaxNumberPassengers(0);
          break;
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'origin':
        setOrigin(value);
        break;
      case 'destination':
        setDestination(value);
        break;
      case 'maxPrice':
        setMaxPrice(parseInt(value));
        break;
      case 'baggageType':
        setBaggageType(value);
        break;
      case 'classType':
        setClassType(value);
        break;
      case 'maxNumberPassengers':
        setMaxNumberPassengers(parseInt(value));
        break;
    }
  }

  const onClickSearchFlights = async () => {
    const request = {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      origin: origin,
      destination: destination,
      maxPrice: maxPrice,
      baggageType: baggageType,
      classType: classType,
      maxNumberPassengers: maxNumberPassengers,
    }
    const response = await getFlights(request);
    setFlights(response);
    console.log(response);
  }

  return (
    <div className={styles.page}>

      <div className={styles.centeredContainer}>

        <h1 style={{ marginBottom: '30px' }}>
          Search your flight ✈️
        </h1>

        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div>
            <h2>Start Date:</h2>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date!)}
            />
          </div>

          <div>
            <h2>End Date:</h2>
            <DatePicker
              showIcon
              selected={endDate}
              onChange={(date) => setEndDate(date!)}
            />
          </div>


        </div>

        <h2 style={{ marginBottom: '20px', width: "70%" }}>
          Add Filters 🔍
        </h2>

        <Box sx={{ display: 'flex', flexDirection: 'column', mb: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', mb: '20px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="origin"
                  checked={checkedState.origin}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                  size="medium"
                />
              }
              label="Origin 🌎"
              sx={{ marginRight: '50px' }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="destination"
                  checked={checkedState.destination}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                  size="medium"
                />
              }
              label="Destination 🌍"
              sx={{ marginRight: '50px' }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="maxPrice"
                  checked={checkedState.maxPrice}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                  size="medium"
                />
              }
              label="Max Price 💰"
              sx={{ marginRight: '50px' }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="baggageType"
                  checked={checkedState.baggageType}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                  size="medium"
                />
              }
              label="Baggage Type 🛄"
              sx={{ marginRight: '50px' }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="classType"
                  checked={checkedState.classType}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                  size="medium"
                />
              }
              label="Class Type 🧐"
              sx={{ marginRight: '50px' }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="maxNumberPassengers"
                  checked={checkedState.maxNumberPassengers}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                  }}
                  size="medium"
                />
              }
              label="Max Number Passengers 👥"
              sx={{ marginRight: '50px' }}
            />
          </Box>
        </Box>

        {
          checkedState.origin ?
            <input
              name="origin"
              type="text"
              onChange={handleInputChange}
              placeholder="Enter the origin"
              className={styles.customInput}
              autoComplete="off"
            /> : <></>
        }

        {
          checkedState.destination ?
            <input
              name="destination"
              type="text"
              onChange={handleInputChange}
              placeholder="Enter the destination"
              className={styles.customInput}
              autoComplete="off"
            /> : <></>
        }

        {
          checkedState.maxPrice ?
            <input
              name="maxPrice"
              type="number"
              onChange={handleInputChange}
              placeholder="Enter max price"
              className={`${styles.customInput} ${styles.noSpin}`}
              autoComplete="off"
            /> : <></>
        }

        {
          checkedState.baggageType ?
            <input
              name="baggageType"
              type="string"
              onChange={handleInputChange}
              placeholder="Enter baggage type"
              className={`${styles.customInput} ${styles.noSpin}`}
              autoComplete="off"
            /> : <></>
        }

        {
          checkedState.classType ?
            <input
              name="classType"
              type="string"
              onChange={handleInputChange}
              placeholder="Enter class type"
              className={`${styles.customInput} ${styles.noSpin}`}
              autoComplete="off"
            /> : <></>
        }

        {
          checkedState.maxNumberPassengers ?
            <input
              name="maxNumberPassengers"
              type="number"
              onChange={handleInputChange}
              placeholder="Enter max number passengers"
              className={`${styles.customInput} ${styles.noSpin}`}
              autoComplete="off"
            /> : <></>
        }

        <Button variant="contained" sx={{ width: '50%' }} onClick={onClickSearchFlights}>
          Search Flights
        </Button>

        <div style={{ width: '70%', height: '1px', backgroundColor: 'white', margin: '40px 0' }}></div>

        <h2 style={{ marginBottom: '20px', width: "70%" }}>
          Avalible Flights 😎
        </h2>

        <div style={{ width: '90%' }}>
          <TableFlights flights={flights} />
        </div>

      </div>

    </div>
  );
}
