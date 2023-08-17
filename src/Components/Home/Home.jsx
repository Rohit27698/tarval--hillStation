import ScrollReveal from 'scrollreveal';
import { Link as ReactRouterLink } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import {Box,  Heading, Text,
  Button,
  Image,Center,IconButton,SlideFade,Input,Divider, 
   Grid,
} from "@chakra-ui/react";
import {ExternalLinkIcon,
  CalendarIcon,
  SearchIcon,
  SunIcon,
  ChevronLeftIcon, ChevronRightIcon, ChatIcon,
} from "@chakra-ui/icons"
import Nature from "./Images/Nature.jpg"
import Darjiling from "./Images/Nature Images/Darjiling.jpg"
import Nature2 from "./Images/Nature3.jpg"
 
import KULU_Manali from "./Images//Nature Images/KULU_Manali.jpg"
import lehladakh from "./Images/Nature Images/leh-ladakh.jpg"
 
import Nainital from "./Images/Nature Images/Nainital-Hill-Station.webp"
import Bhrahmtal from "./Images/Nature Images/Bhrahmtal.jpg"
import ShimLa from "./Images/Nature Images/ShimLa.jpg"
import Dharamsala from "./Images/Nature Images/Dharamsala.webp"
import map from "./Images/map.jpg"
import logo1 from "./Images/ComLogo/logo1.jpg"
import logo2 from "./Images/ComLogo/logo2.jpg"
import logo3 from "./Images/ComLogo/logo3.jpg"
import logo4 from "./Images/ComLogo/logo4.jpg"
import Maclordganj from "./Images/Nature Images/Maclordganj.jpg"
import {Link} from "react-router-dom";
import Sikkim from "./Images/Nature Images/Sikkim.jpg"
import Shillong from"./Images/Nature Images/Shillong.webp"
 

const Home = () => {

  

  const images = [
    Darjiling,
    Bhrahmtal,
    ShimLa,
     KULU_Manali,
    Maclordganj,
     lehladakh,
    Dharamsala,
    Nainital,
     Shillong,
     Sikkim ,
     


     Darjiling,
     Bhrahmtal,
     ShimLa,
      KULU_Manali,
     Maclordganj,
      lehladakh,
     Dharamsala,
     Nainital,
      Shillong,
      Sikkim ,






      Darjiling,
      Bhrahmtal,
      ShimLa,
       KULU_Manali,
      Maclordganj,
       lehladakh,
      Dharamsala,
      Nainital,
       Shillong,
       Sikkim ,




       Darjiling,
       Bhrahmtal,
       ShimLa,
        KULU_Manali,
       Maclordganj,
        lehladakh,
       Dharamsala,
       Nainital,
        Shillong,
        Sikkim 

    
  ];

    

   

 

  const testimonials = [
    {
      name: "Prince Vejeta",
      rating: 5,
      feedback: "I'm Happy because I had a good experience with Healing. Thank you so much.",
      image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/prateek_6232b84d8b.jpeg"  
    },
    {
      name: "Itachi uchiha",
      rating: 3,
      feedback: "I'm Happy because I had a best experience with Healing. Thank you so much.",
      image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/keshav_misra_203a893693.jpeg"  
    },
    {
      name: "Madara Uchiha",
      rating: 5,
      feedback: "I'm Happy because I had a cool experience with Healing. Thank you so much.",
      image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/1614198786109_Ishita_Chanana_d3d8c56ab0.jpg" 
    },
    {
      name: "Obito",
      rating: 4,
      feedback: "I'm Happy because I had an amazing experience with Healing. Thank you so much.",
      image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Whats_App_Image_2022_04_15_at_9_02_03_PM_Ankit_Agrawal_4e1586afbf.jpeg" 
    },
    {
      name: "Light Yagami",
      rating: 5,
      feedback: "I'm Happy because I had best experience with Healing. Thank you so much.",
      image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/dp_Dipankar_Paul_ffd0867780.jpg"  
    }
  ];

const ourTeam = [
  {
    name: "Rohit Kharwar",
    position: "Full Stack Developer",
    company: "Zentech",
    image: "https://drive.google.com/uc?export=view&id=1CBZfCuVCd5Z10CYEam0wiMaZNZHlEEMH",
    
  },
  {
    name: "Indraeet Gupta",
    position: "Full Stack Android Developer",
    company: "Airtel",
    image: "https://drive.google.com/uc?export=view&id=1g4tjTpoUiImN7d2JHzVrFxIqe5Ljtw0O"  
  },
  {
    name: "Bharatveer Singh",
    position: "Frontend Developer",
    company: "Wipro",
    image: "https://drive.google.com/uc?export=view&id=1jaNWoyxyU0ath3LI5Y-HaqdVCF_6KoQS"
     
  },
  {
    name: "Saif Khan",
    position: "Backend Developer",
    company: "SISCO",
    image: "https://drive.google.com/uc?export=view&id=1yd3kAyRANOAmManRH-0KpE5HEJF3mGyK"
   
  },
  {
    name: "Asif Wali",
    position: "Sr. Software-Developer",
    company: "Udacity",
    image: "https://drive.google.com/uc?export=view&id=1qh3LgE2fpHOPTs6SqVbs-FstKMtdvo75"
    
  },
];







  
  
  const windowsize = 4; // Number of images visible in the slider at a time
  const [windowStart, setWindowStart] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for moving right, -1 for moving left






  const nextWindowIndex = (currentWindowIndex) => {
    let nextIndex = currentWindowIndex + direction * windowsize;
    if (nextIndex < 0) {
      nextIndex = images.length - windowsize;
    } else if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    return nextIndex;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWindowStart((prevWindowStart) => nextWindowIndex(prevWindowStart));
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval); // Clear the interval on unmount
    };
  }, []);
  





  


  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };


  useEffect(() => {
    const scrollAnimation = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    
    scrollAnimation.reveal('.animate-me', { delay: 100 }); // Apply animation to elements with the class 'animate-me'

    return () => {
      scrollAnimation.destroy();
    };
  }, []);


  useEffect(() => {
    const scrollAnimation = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    
    scrollAnimation.reveal('.animate-meR', { delay: 100 }); // Apply animation to elements with the class 'animate-me'

    return () => {
      scrollAnimation.destroy();
    };
  }, []);





  return <Box  className='animate-me'  background="linear-gradient(135deg, #77B9DE, #3F87E0)" marginTop={"-1px"}>
   <Box   style={{ 
  
  marginTop: "-5px",
  backgroundImage: `url(${Nature})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  
}}>
 <Box className='animate-me' paddingBottom="400px" paddingTop="150px">
  <Heading
    size='2xl'
    paddingTop="20px"
    lineHeight={1.3}
    color="white"
    fontFamily="Arial, sans-serif"
    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
    textAlign="center"
  >
    <span style={{ color: "#FFA500", fontSize: "150%", fontWeight: "bold" }}>Embarking on</span> a Hillstation Adventure
  </Heading>

  <Text
    color="white"
    marginTop="40px"
    fontFamily="Arial, sans-serif"
    textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
    textAlign="center"
  >
    Get an amazing experience here, no matter where in the world you want to go, <br />
    we can help you go there anytime.
  </Text>

  <Button
    leftIcon={<ExternalLinkIcon />}
    backgroundColor="orange"
    color="white"
    padding="2px"
    width="150px"
    borderRadius="10px"
    marginTop="50px"
    fontFamily="Arial, sans-serif"
  >
    <Link to="/ourworlds">Book a Trip</Link>
  </Button>
</Box>

    </Box>    






 
         
    
   {/*2 Main Box */}
    
    
    <Box backgroundColor="rgb(26, 29, 46)">
      <Box className='animate-me' paddingTop="150px" textAlign="center">
        <Text color="rgba(7, 89, 145, 255)">Get Amazing Experience</Text>
        <Heading size="lg" color="white" paddingTop="10px">
          Find Travel Perfection
        </Heading>
        <Text fontSize="sm" color="white" paddingTop="25px">
          Bibendum pharetra faucibus at sapien a faucibus vitae senectus <br />
          morbi consequat sed orci, vulputate id pellentesque
        </Text>
      </Box>

      <Box
        className='animate-me'
        width="100%"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-evenly"
        marginTop="50px"
        padding="30px"
        gap={{ base: "20px", md: "10px" }}
      >
        {/* Schedule a Plan */}
        <Link as={ReactRouterLink} to="/ourworlds">
          <Box
            className='animate-me'
            boxShadow='xs'
            p='6'
            rounded='md'
            bg='rgb(26, 29, 60)'
            padding={{ base: "20px", md: "40px" }}
            flex={{ base: "none", md: "1" }}
            maxWidth={{ base: "none", md: "350px" }}
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s"
          >
            <Center className='animate-me'>
              <Box
                className='animate-me'
                borderRadius="18px"
                backgroundColor="gray"
                width={{ base: "16%", md: "20%" }}
                height="45px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CalendarIcon />
              </Box>
            </Center>
            <br />
            <Heading color="white" size="lg">
              Schedule a Plan
            </Heading>{' '}
            <br />
            <Text color="white" fontSize="small">
              Quis pretium placerat morbi <br />
              morbi arcu non lobortis neque, porta <br />
              ligula platea eget ultricies.
            </Text>
          </Box>
        </Link>

        {/* Find a Destination */}
        <Link as={ReactRouterLink} to="/ourworlds">
          <Box
            boxShadow='xs'
            p='6'
            rounded='md'
            bg='rgb(26, 29, 60)'
            padding={{ base: "20px", md: "40px" }}
            flex={{ base: "none", md: "1" }}
            maxWidth={{ base: "none", md: "350px" }}
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s"
          >
            <Center>
              <Box
                borderRadius="18px"
                backgroundColor="gray"
                width={{ base: "16%", md: "20%" }}
                height="45px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <SearchIcon />
              </Box>
            </Center>
            <br />
            <Heading color="white" size="lg">
              Find a Destination
            </Heading>{' '}
            <br />
            <Text color="white" fontSize="small">
              Luctus ac et egestas sagittis a<br />
              nulla mauris id turpis vitae erat nibh <br />
              gravida convallis lorem.
            </Text>
          </Box>
        </Link>

        {/* Enjoy Your Trip */}
        <Link as={ReactRouterLink} to="/ourworlds">
          <Box
            boxShadow='xs'
            p='6'
            rounded='md'
            bg='rgb(26, 29, 60)'
            padding={{ base: "20px", md: "40px" }}
            flex={{ base: "none", md: "1" }}
            maxWidth={{ base: "none", md: "350px" }}
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s"
          >
            <Center>
              <Box
                borderRadius="18px"
                backgroundColor="gray"
                width={{ base: "16%", md: "20%" }}
                height="45px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <SunIcon />
              </Box>
            </Center>
            <br />
            <Heading color="white" size="lg">
              Enjoy Your Trip
            </Heading>{' '}
            <br />
            <Text color="white" fontSize="small">
              Ligula dui sit integer vestibulum, Facilisis <br />
              et viverra volutpat mollis leo sapien <br />
              mauris nulla marcu.
            </Text>
          </Box>
        </Link>
      </Box>
 
 


 







      <Box 
  background={`url(${Nature2})`}
  backgroundSize="cover"
  backgroundPosition="center"
  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
  borderRadius="10px"
  padding="20px"
  textAlign="center"
  color="white"
>
  <Text  className='.animate-me' fontSize="24px" fontWeight="bold" marginBottom="10px">
    Popular Destinations
  </Text>
  <Box   className='.animate-me' display="flex" justifyContent="center" alignItems="center">
    <Heading fontSize="20px">Recommended Destinations</Heading>
  </Box>
  <SlideFade in offsetY="20px">
    <Box
     className='.animate-meR'
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="40px"
      width="100%"
      flexWrap="wrap"
    >
      {images.slice(windowStart, windowStart + windowsize).map((image, index) => (
        <Box  className='.animate-meR'
          key={index}
          width="300px"
          height="400px"
          borderRadius="10px"
          overflow="hidden"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          marginBottom="20px"
          mx="10px"
        >
          <img
            src={image}
            alt={`${windowStart + index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      ))}
    </Box>
  </SlideFade>
</Box>

   







      <Box    display={"flex"} flexDirection={{ base: "column", md: "row" }}
        marginTop={{ base: "50px", md: "100px" }}
        padding={{ base: "0", md: "20px" }}
        color={"white"}
        justifyContent={"space-evenly"}
        alignItems={{ base: "center", md: "initial" }}
      >
        <Box  className='animate-meL'
        width={{ base: "100%", md: "auto" }} maxWidth={{ base: "none", md: "50%" }}
        >
          <Image src={map}/>
        </Box>

        <Box   className='animate-meR'
        textAlign={{ base: "center", md: "left" }} marginTop={{ base: "40px", md: "0" }}
        >
          <Text color={"white"}>Benefits</Text>
          <br />
          <Heading size={"lg"}>Our Team Already Available <br/>
              All Over the World
          </Heading>
          <br />
          <Text>Sed ut perspiciatis unde omnis iste natus error sit <br />
              voluptatem accusantium doloremque laudantium, tatam
           </Text>
           <br />
           <Box display={"flex"}
           flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "center", md: "space-between" }}
           >
              <Box
              textAlign={{ base: "center", md: "left" }} marginBottom={{ base: "20px", md: "0" }}
              > <Heading>16K+</Heading> <Text fontSize={"sm"}>Happy Customers</Text> </Box>
              <Box
              textAlign={{ base: "center", md: "left" }} marginBottom={{ base: "20px", md: "0" }}
              > <Heading>20K+</Heading> <Text fontSize={"sm"}>Registered Company</Text> </Box>
              <Box
              textAlign={{ base: "center", md: "left" }} marginBottom={{ base: "20px", md: "0" }}
              > <Heading>20K+</Heading> <Text fontSize={"sm"}>Registered Country</Text> </Box>
           </Box>
        </Box>
      </Box>

      <Box className='animate-me' marginTop={"100px"} display={"flex"} justifyContent={"center"} alignContent={"center"} flexDirection={{ base: "column", md: "row" }} gap={"100px"}>
  <Box>
    <Text color={"rgba(7,89,145,255)"}>Testimonials</Text>
    <br />
    <Heading color={"white"}>What People Say <br /> About Our Services</Heading>
    <br />
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={goToPreviousSlide}
        aria-label="Previous"
        mr={2}
        display={{ base: "none", md: "flex" }}
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={goToNextSlide}
        aria-label="Next"
        ml={2}
        display={{ base: "none", md: "flex" }}
      />
      <Box flexGrow={1} textAlign="center">
        <Text color={"white"}>There are many Variations</Text>
      </Box>
    </Box>
  </Box>
  <Box
  className='animate-me'
  display="grid"
  gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
  gap={4}
>
  {testimonials.map((testimonial, index) => (
    <Box
      key={index}
      padding="20px"
      textAlign="left"
      display={index === currentSlide ? "block" : "none"}
      boxShadow="2xl"
      p="6"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="10px"
        right="10px"
        borderRadius="full"
        overflow="hidden"
        boxSize="150px"
        zIndex="1"
      >
        <Image
          src={testimonial.image} // Replace with the actual image URLs
          alt={`Customer ${index + 1}`}
          objectFit="cover"
          boxSize="100%"
          
        />
      </Box>
      <Box
        borderRadius={"18px"}
        backgroundColor={"gray"}
        width={"20%"}
        height={"45px"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ChatIcon />
      </Box>
      <br />
      <Text color={"white"}>{testimonial.name}</Text> <br />
      <Box display={"flex"} color={"white"}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <SunIcon key={i} />
        ))}
      </Box>{" "}
      <br />
      <Text color={"white"} fontSize={"sm"}>
        {testimonial.feedback}
      </Text>
    </Box>
  ))}
</Box>


  <Box
    display={{ base: "flex", md: "none" }}
    justifyContent="center"
    marginTop={"10px"}
  >
    <IconButton
      icon={<ChevronLeftIcon />}
      onClick={goToPreviousSlide}
      aria-label="Previous"
      mr={2}
    />
    <IconButton icon={<ChevronRightIcon />} onClick={goToNextSlide} aria-label="Next" ml={2} />
  </Box>
</Box>


 

{/*our Team Box */}

(
    <Box 
      className='animate-me'
      display="flex" flexDirection="column" alignItems="center" marginTop="100px">
      <Text  className='animate-me' color="rgba(7,89,145,255)">Our Team</Text>
      <br />
      <Heading   marginTop={"20px"} className='animate-me' color="white">Meet Our Awesome Team</Heading>
      <br />
      <Box marginTop={"20px"} display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
        {ourTeam.map((member, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            margin="10px"
            minWidth="280px" // Set a minimum width to prevent too narrow boxes
          >
            <Box
              width="150px"
              height="150px"
              borderRadius="50%"
              overflow="hidden"
              backgroundColor="gray.800"
              marginBottom="10px"
            >
              <Image
                src={member.image}
                alt={`Team Member ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
            <Text color="white" fontSize="lg" fontWeight="bold">
              {member.name}
            </Text>
            <Text color="white" fontSize="md">{member.position}</Text>
            <Text color="white" fontSize="md">
              {member.company}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
















    <Box    className='animate-me' marginTop={{ base: "100px", md: "50px" }} textAlign="center">
      <Text color="rgba(7, 89, 145, 255)">Subscription</Text>
      <Heading color="white" marginTop="20px" marginBottom="10px">
        Join Our Community to Get the Best Price
      </Heading>
      <Text color="white" fontSize="md">
        Subscribe to be the first to hear about upcoming fintech services!
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        marginTop="20px"
        justifyContent="center"
        alignItems={"center"}
        marginLeft={"100px"}
        marginRight={"100px"}
      >
        <Image src={logo1} />
        <Image src={logo2} />
        <Image src={logo3} />
        <Image src={logo4} />
      </Grid>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="center" marginTop="50px">
        <Input placeholder="Enter your email" marginBottom={{ base: "20px", md: "0" }} maxWidth="300px" />
        <Button colorScheme="orange" size="md" marginLeft={{ md: "10px" }}>
          Join Now
        </Button>
      </Box>
    </Box>

      <Divider marginTop={"50px"}/>
    </Box>


  {/* <Footer/> */}
  </Box>


}

export default Home
