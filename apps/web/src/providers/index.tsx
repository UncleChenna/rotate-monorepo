'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TodoProvider from './todo'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <TodoProvider>
          {children}
        </TodoProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}