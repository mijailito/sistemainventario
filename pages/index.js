import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage } from '../componente/login';
import { SidebarHeader } from '../componente/Navbar';

export default function Home() {
  return (
    <ChakraProvider>
        <LoginPage/>
    </ChakraProvider>

  )
}
