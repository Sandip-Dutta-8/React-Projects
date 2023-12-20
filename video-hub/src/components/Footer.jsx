import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend } from 'react-icons/ai';
  import { FaYoutube } from "react-icons/fa";
  import { AiFillInstagram } from "react-icons/ai";
  import { FaFacebook } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading
              size="md"
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py="2">
              <Input
                placeholder="Enter Email Here..."
                border={'none'}
                borderRadius="none"
                outline={'none'}
                focusBorderColor="none"
                p={'0'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'full'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
  
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            mt={['5','0']}
            mb={['5', '0']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All rights received</Text>
          </VStack>
  
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'} mb={'3'}>
              Social Media
            </Heading>
            <HStack w={'full'} alignItems={'center'} justifyContent={'center'}>
                <Button variant={'ghost'} colorScheme={'white'} borderRadius={'full'}>
                <a target={'blank'} href="#">
                    <FaYoutube size={'30'}/>
                </a>
                </Button>
                <Button variant={'ghost'} colorScheme={'white'} borderRadius={'full'}>
                <a target={'blank'} href="#">
                    <FaFacebook size={'30'}/>
                </a>
                </Button>
    
                <Button variant={'ghost'} colorScheme={'white'} borderRadius={'full'}>
                <a target={'blank'} href="#">
                    <AiFillInstagram size={'30'}/>
                </a>
                </Button>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  