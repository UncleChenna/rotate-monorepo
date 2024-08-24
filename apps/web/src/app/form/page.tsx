"use client"
import React, { useContext, useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import { TodoContext } from "@/contexts/TodoContext";
import { Todo } from "@/services/types/todo.types";

export default function Form() {
  const [title, setTitle] = useState("");
  const toast = useToast();
  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title) {
      const newTodo: Todo = {
        title,
        userId: 1,
        id: Math.floor(Math.random() * 9000) + 1000,
        completed: false
      };

      setTodos([...todos, newTodo]);

      toast({
        title: "To-do added.",
        description: "Your to-do has been added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear form
      setTitle("");
    } else {
      toast({
        title: "Incomplete form.",
        description: "Please fill out all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 100px)"
      width="100vw"
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        mt={4}
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        maxW="lg"
        width="100%"
      >
        <VStack spacing={6}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">Title</FormLabel>
            <Input
              variant="filled"
              placeholder="Enter the title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              focusBorderColor="blue.500"
            />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight="bold">Description (disabled field)</FormLabel>
            <Textarea
              variant="filled"
              placeholder="Enter description"
              disabled
              focusBorderColor="blue.500"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            width="full"
            borderRadius="full"
          >
            Add To-Do
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
