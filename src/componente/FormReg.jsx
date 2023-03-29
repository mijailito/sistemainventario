import { FormControl, FormLabel, Input, Select, Grid, GridItem, Flex,Button } from '@chakra-ui/react'
import React from 'react'


const categorias = [

  { categoria: 'mochila' },
  { categoria: 'pecheras' },
  { categoria: 'Morral' },
  { categoria: 'bolson' },
  { categoria: 'Rodilleras' },
  { categoria: 'Coderas' },
  { categoria: 'musleras' },
  { categoria: 'chalecos' },
  { categoria: 'Lona' },
  { categoria: 'uniformes militares' },
  { categoria: 'uniformes Policiales' },
  { categoria: 'parkas policiales' },
  { categoria: 'toallas' },
  { categoria: 'Deportivos' },
  { categoria: 'Panocas' },
  { categoria: 'Gorras' },
  { categoria: 'yoquis' },
  { categoria: 'cala clavas' },
  { categoria: 'sombreros' },
  { categoria: 'guantes' },
  { categoria: 'cinturones' },
  { categoria: 'recuperador de arma' },
  { categoria: 'correages' },
  { categoria: 'brujulas' },
  { categoria: 'gas pimientas' },
  { categoria: 'manillas-esposas' },
  { categoria: 'tapa oidos' },
  { categoria: 'linterna' },
  { categoria: 'toritos' },
  { categoria: 'Barra Camuflaje' },
  { categoria: 'lente de tiro' },
  { categoria: 'garras' },
  { categoria: 'caramañolas' },
  { categoria: 'calzados' },
  { categoria: 'medias' },
  { categoria: 'kanecos' },
  { categoria: 'chompas' },
  { categoria: 'poleras' },



]
function Formulario() {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center">
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>

        <GridItem >
          <FormLabel>Categoria</FormLabel>
          <Select>
            {categorias?.map((categoria) => (
              <option key={categoria.categoria}>
                {categoria.categoria}
              </option>

            ))}

          </Select>

        </GridItem>
        <GridItem>
          <FormLabel >Marca</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>Institución</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>Industria</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>Material</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>Contenido</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>Color</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>tela</FormLabel>
          <Input type='text' />
        </GridItem>

        <GridItem>
          <FormLabel>Talla</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <FormLabel>Precio de venta</FormLabel>
          <Input type='text' />
        </GridItem>
        <GridItem>
          <Button w="full" borderRadius={40}>
            Enviar
          </Button>
        </GridItem>
        <GridItem>
        <Button w="full" borderRadius={40}>
            modelo
          </Button>
        </GridItem>


      </Grid>
    </Flex>
  )
}

export default Formulario