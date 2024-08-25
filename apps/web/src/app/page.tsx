'use client'
import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box height="calc(100vh - 150px)" display="flex" alignItems="center" justifyContent="center">
      <Box
        px={[4, 8, 12]}
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

        <Button 
          colorScheme="gray" 
          size="lg" 
          borderRadius="full"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}