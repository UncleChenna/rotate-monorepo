import React from "react";
import { Box, Heading, Text, Badge, VStack, HStack, Icon, Divider, Flex } from "@chakra-ui/react";
import { CheckCircleIcon, TimeIcon } from "@chakra-ui/icons";
import type { Todo } from "@/services/types/todo.types";

interface Props { data: Todo }

//this file ( chakra UI implementation of to do card ) is outdated and has been marked for deletion 
export default function DeprecatedTodoCard({ data }: Props) {
  return (
    <Box
      borderRadius="lg"
      boxShadow="lg"
      p={8}
      bg="gray"
      color="white"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
      w='100%'
      mx="auto"
    >
      <VStack spacing={4} align="start">
        <Flex justifyContent='space-between' w='100%' alignItems='start' gap={3}>
          <Box>
            <Heading fontSize="2xl" fontWeight="bold">
              {data.title}
            </Heading>
          </Box>

          <Box>
            <Icon
              as={data.completed ? CheckCircleIcon : TimeIcon}
              boxSize={6}
              color={data.completed ? "green.300" : "yellow.300"}
            />
          </Box>
        </Flex>

        <Text fontSize="lg" fontWeight="medium" opacity={0.9}>
          User ID: {data.userId}
        </Text>

        <Divider borderColor="whiteAlpha.600" />

        <HStack justifyContent="space-between" w="full">
          <Badge
            colorScheme={data.completed ? "green" : "red"}
            fontSize="0.9em"
            px={4}
            py={1}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {data.completed ? "Completed" : "Pending"}
          </Badge>

          <Text fontSize="sm" opacity={0.8}>
            ID: {data.id}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}