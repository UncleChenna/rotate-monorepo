"use client"
import React from "react";
import { Box, Heading, Text, Button, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion( Box );

export default function Home() {
  const padding = useBreakpointValue( { base: 4, md: 8, lg: 12 } );

  return (
<Box height="calc(100vh - 150px)" display="flex" alignItems="center" justifyContent="center">
  <MotionBox
    p={padding}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    minHeight="calc(100vh - 100px)"
    color="white"
  >
    <Heading as="h1" size="2xl" mb={4} fontWeight="bold">
      Welcome!
    </Heading>

    <Button colorScheme="teal" size="lg" borderRadius="full">
      Get Started
    </Button>
  </MotionBox>
</Box>
  );
}