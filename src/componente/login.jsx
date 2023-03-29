import { Card, Center, Flex, Grid, GridItem, Box, Image, Heading, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

export function LoginPage() {
    return (
        <Flex height='100vh' alignItems='center' justifyContent='center' bgColor='#EDF0F2' >

            <Card shadow='dark-lg' border borderRadius='40px' >

                <Grid templateColumns='repeat(2, 1fr )' templateRows='repeat(1)' gap={[4 , 8]} height={{base:'20%' , md:'50%', xl:'100%'}}  >
                    <Box gridColumn='1' display='flex' flexDirection='column'>
                        <Heading padding={['20px','20px','20px','20px']} fontSize='20px' >iniciar sesion</Heading>
                        <Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(6)'  rowGap='20px' padding={[4, 6, 8]}>
                        
                        <GridItem gridRow={2} gridColumn='1 / span 2'   >
                            <FormControl  >
                                <FormLabel >Usuario*</FormLabel>
                                <Input type='text' placeholder='Usuario' padding='none' />
                            </FormControl>
                        </GridItem>
                        
                        <GridItem gridRow={3} gridColumn='1 / span 2' >
                            <FormControl colSpan={2} >
                                <FormLabel >Contraseña*</FormLabel>
                                <Input type='Password' placeholder='Contraseña' padding='none' />
                            </FormControl>
                        </GridItem>
                      
                        <GridItem gridRow={4} gridColumn='1 / span 2 ' >
                            
                                <Button borderRadius='20px' bg='#4CAF50' w='100%' textColor='white'>Iniciar Sesion</Button>                            
                            
                        </GridItem>
                        <GridItem gridRow={5} gridColumn='1 / span 2' > 
                        <Button borderRadius='20px' bg='#4CAF50' w='100%' textColor='white'>Registrar</Button>                     
                        </GridItem>


                        </Grid>
                      
                    </Box>
                    <Box gridColumn='2 '  display="flex"  alignItems='center' justifyContent='center' >

                       

                            <Image  borderRadius='40px' src='https://bit.ly/dan-abramov' />


                    </Box>




                </Grid>


















            </Card>











        </Flex>

    )
}