import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from "./Images/MainLogo.jpg"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <span hidden>{label}</span>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"rgb(26, 29, 46)"}
      color="white"
      paddingLeft={"50px"}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>

        <Stack width={"150%"}>
            <Box display={"flex"} gap={"10px"}>
              <Image src={Logo} alt="logo" width={"25px"} height={"25px"} borderRadius={"30px"}/>
              <ListHeader> Hilling</ListHeader>
            </Box>
            <Text textAlign={"left"}>Set ut perspiciatis undmnis iste <br />
              natus error sit voluptatem.
            </Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>About</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>News</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Why must Hilling</Link>
            <Link href={'#'}>Partner With Us</Link>
            <Link href={'#'}>Blog</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact US</ListHeader>
            <Link href={'#'}>Location</Link>
            <Link href={'#'}>Email</Link>
            <Link href={'#'}>Telephone</Link>
          </Stack>
          
        </SimpleGrid>
      </Container>

      <Box paddingRight={"200px"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text> 2023© Hilling. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
            <FaFacebook />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
