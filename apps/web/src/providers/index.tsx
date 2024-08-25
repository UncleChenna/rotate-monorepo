'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TodoProvider from './todo'
import { domAnimation, LazyMotion } from 'framer-motion'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <LazyMotion features={ domAnimation }>
             <TodoProvider>
          {children}
        </TodoProvider>
        </LazyMotion>
      </ChakraProvider>
    </QueryClientProvider>
  )
}