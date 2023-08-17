import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import './Payment.css'
import { useNavigate } from 'react-router-dom';

const Payment = (  ) => {
  const nav=useNavigate()
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };
  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  
  const handleClick=()=>{
    nav("/LoadingPage")
    console.log("clicked")
  }
 
  const isAddressEmpty = (cardNumber.trim()==='') || cardHolder.trim()===''||expiry.trim()===''||cvv.trim()==='';
  const tooltipMessage = 'Please fill all mandatory fields';
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div id='page'>
      <div id='bx'>
    <Box className="box">
      <h2 id='heading'>Make Your Payment Here</h2>
      <form  onSubmit={handleSubmit}>
        
        <FormControl id="first" marginBottom="4">
          <FormLabel> Card Number <span className="required">*</span></FormLabel>
          <Input
            className="inputBx"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="Enter your card number"
          />
        </FormControl>

        <FormControl id="last" marginBottom="4">
          <FormLabel>Card Holder <span className="required">*</span></FormLabel>
          <Input
          className="inputBx"
            type="text"
            value={cardHolder}
            onChange={handleCardHolderChange}
            placeholder="e.g Jhon Doe"
          />
        </FormControl>
        
        <FormControl id="phone" marginBottom="4">
          <FormLabel>Expiry <span className="required">*</span></FormLabel>
          <Input
            className="inputBx"
            type="tel"
            value={expiry}
            onChange={handleExpiryChange}
            placeholder="  MM/YY"
          />
        </FormControl>

        <FormControl id="cvv" marginBottom="4">
          <FormLabel>CVV <span className="required">*</span></FormLabel>
          <Input
            type="number"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="123"
          />
        </FormControl>
       

        
        <Button onClick={handleClick} isDisabled={isAddressEmpty} title={isAddressEmpty ? tooltipMessage : ''} _disabled={{ cursor: 'not-allowed' }} className='btn' type="submit" >
          Next
        </Button>
      </form>
    </Box>
    </div>
    </div>
  );
};

export default Payment;
