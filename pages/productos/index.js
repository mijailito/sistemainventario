import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { VendedoraLayout } from '../../layout/VendedoraLayout'

const Productos = () => {
  return (
<ChakraProvider>
<VendedoraLayout>
      <h1>Productos</h1>

    </VendedoraLayout>
</ChakraProvider>
  )
}

export default Productos