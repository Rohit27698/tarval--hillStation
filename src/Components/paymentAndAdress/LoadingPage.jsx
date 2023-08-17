import { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import {RingLoader} from "react-spinners";
import "./Loading.css"

function LoadingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
     const handleClick=()=>{
        window.open("/",'_self')
     }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsPaymentConfirmed(true);
        }, 3000);
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin={'250px auto'}
        >
            {isLoading ? (
                <Box >
                    <div className="container">
                    <RingLoader color="blue" />
                    </div>
                    
                    <Text id='text'>
                        Your transaction is being processed. Please be patient
                    </Text>
                </Box>
            ) : (
                <>
                    {isPaymentConfirmed && (
                        <Box>
                            <Text id="text" fontSize="xl" fontWeight="bold" color="orange" mb="20px">
                                Payment Confirmed.
                            </Text>
                        </Box>
                    )}
                   
                        <Button onClick={handleClick} colorScheme={'orange'} id='btn'>Return to Home Page</Button>
                   
                </>
            )}
        </Box>
    );
}

export default LoadingPage;