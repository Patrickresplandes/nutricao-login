import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import { NextUIProvider } from '@nextui-org/react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    < NextUIProvider >
      <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
    </NextUIProvider>
  ) 
}
