"use client"
import React, { useContext } from "react";
import { Box, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { Todo } from "@/services/types/todo.types";
import TodoCard from "./ToDoCard";
import { InfoIcon } from "@chakra-ui/icons";
import { TodoContext } from "@/contexts/TodoContext";

export default function TodoPreview() {
  const { todos } = useContext( TodoContext )

  return (
    <Box px={ 8 } py={8} mt={ 4 } mb={ 10 } height="85vh" overflow="scroll" >

      { todos.length > 0 ? (
        <Box w='100%' maxW='800px' mx='auto'>
          <Heading fontSize="2xl" fontWeight="bold" color="white">
            Todo Data
          </Heading>

          <SimpleGrid mt={ 4 } columns={ { base: 1, lg: 2 } } spacing={ 6 }>
            { todos.map( ( todo: Todo, index: number ) => (
              <TodoCard key={ index } data={ todo } />
            ) ) }
          </SimpleGrid>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="300px"
          bg="gray.50"
          borderRadius="md"
          boxShadow="md"
          w='100%'
          mx='auto'
          maxW='md'
        >
          <Icon as={ InfoIcon } boxSize={ 12 } color="gray.400" mb={ 4 } />

          <Text fontSize="lg" color="gray.600" textAlign="center">
            There are no todos yet.
          </Text>
        </Box>
      ) }
    </Box>
  )
}