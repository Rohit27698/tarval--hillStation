import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import './AddressPage.css'
import { useNavigate } from 'react-router-dom';

const AddressPage = (  ) => {
  const nav=useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  const handleClick=()=>{
    nav('/payment')
  }
 
  const isAddressEmpty = firstName.trim()==='' || lastName.trim()===''||phoneNumber.trim()===''||dateOfBirth.trim()===''||state.trim()===''||email.trim()===''||city.trim()===''||zipcode.trim()===''||address.trim()==='';
  const tooltipMessage = 'Please fill all mandatory fields';
  const handleSubmit = (event) => {
    event.preventDefault();
    
    
  };
  return (
    <div id='pg'>
      <div id='bx'>
    <Box className="box_">
      <h2 id='head'>Traveller Address</h2>
      <form  onSubmit={handleSubmit}>
        <div id='nameContainer'>
        <FormControl id='firstName' marginBottom="4">
          <FormLabel> First Name <span className="required">*</span></FormLabel>
          <Input
            className="inputBx"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter your first name"
          />
        </FormControl>

        <FormControl id="lastName" marginBottom="4">
          <FormLabel>Last Name <span className="required">*</span></FormLabel>
          <Input
            className="inputBx"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter your last name"
          />
        </FormControl>
        </div>
        <div id='DOB'>
        <FormControl id="phoneNumber" marginBottom="4">
          <FormLabel>Phone Number <span className="required">*</span></FormLabel>
          <Input
            className="inputBx"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
          />
        </FormControl>

        <FormControl id="dateOfBirth" marginBottom="4">
          <FormLabel>Date of Birth <span className="required">*</span></FormLabel>
          <Input
            type="date"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            placeholder="Enter your date of birth"
          />
        </FormControl>
        </div>
        <FormControl  id="email" marginBottom="4">
          <FormLabel>Email Address <span className="required">*</span></FormLabel>
          <Input
          className="inputBx"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
          />
        </FormControl>
        <FormControl  id="address" marginBottom="4">
          <FormLabel>Address <span className="required">*</span></FormLabel>
          <Input
          className="inputBx"
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
          />
        </FormControl>


        <FormControl  id="street" marginBottom="4">
          <FormLabel>Street </FormLabel>
          <Input
          className="inputBx"
            type="text"
            value={street}
            onChange={handleStreetChange}
            placeholder="Enter your street address"
          />
        </FormControl>
        
        <div id='cityDiv'>
        <FormControl  id="city" marginBottom="4">
          <FormLabel>City <span className="required">*</span></FormLabel>
          <Input
          className="inputBx"
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter your city"
          />
        </FormControl>

        <FormControl  id="state" marginBottom="4">
          <FormLabel>State <span className="required">*</span></FormLabel>
          <Input 
            className="inputBx"
            type="text"
            value={state}
            onChange={handleStateChange}
            placeholder="Enter your state"
          />
        </FormControl>
        </div>

        <FormControl  id="zipcode" marginBottom="4">
          <FormLabel>Zip Code <span className="required">*</span></FormLabel>
          <Input
          className="inputBx"
            type="text"
            value={zipcode}
            onChange={handleZipcodeChange}
            placeholder="Enter your zip code"
          />
        </FormControl>
        
        <Button onClick={handleClick} isDisabled={isAddressEmpty} title={isAddressEmpty ? tooltipMessage : ''} _disabled={{ cursor: 'not-allowed' }} className='bn' type="submit" >
          Next
        </Button>
      </form>
    </Box>
    </div>
    </div>
  );
};

export default AddressPage;
