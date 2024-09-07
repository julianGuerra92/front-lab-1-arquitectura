'use client'

import { useState } from "react";
import styles from "./page.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, FormControlLabel, Checkbox, Button } from "@mui/material";

export default function Home() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);

  const [checkedState, setCheckedState] = useState({
    origin: false,
    destination: false,
    maxPrice: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
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
    }
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

        {
          checkedState.origin ?
            <input
              name="origin"
              type="text"
              onChange={handleInputChange}
              placeholder="Enter the origin"
              className={styles.customInput}
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
            /> : <></>
        }

        <Button variant="contained" sx={{width: '50%'}}>
          Search Flights
        </Button>

        <div style={{ width: '70%', height: '1px', backgroundColor: 'white', margin: '40px 0' }}></div>

        <h2 style={{ marginBottom: '20px', width: "70%" }}>
          Avalible Flights 😎
        </h2>

      </div>



    </div>
  );
}
