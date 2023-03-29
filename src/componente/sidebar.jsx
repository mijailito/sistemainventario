import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'








export const SidebarContent = ({LinkItems}) => {

    return (
        <Box transition="3s ease" 
        bgGradient="linear(to bottom,#52B788, #4CAF50)"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200','gray.700')}
        w={{ base: "none", md: "60" }}
        position="absolute"
        h="full"
        
        zIndex={1}
        
       
    
        >
        <Flex h='20' alignItems='center' mx='8' justifyContent="space-between" >
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" >
                Logo
            </Text>
           
        </Flex>
        {LinkItems?.map((link) => (
            <NavItem key={link.name} icon={link.icon} name={link.name} path={link.path}>
                {link.name}
            </NavItem>   ))}
       


        </Box>
    )
}
const NavItem = ({icon, name , path}) => {
    return (
        <Link href={path} style={{textDecoration:'none'}} _focus={{boxShadow:'none'}}>
        <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer" 
        _hover={{
            bg:'cyan.400',
            color:'white'
        }}
        >
            <Icon as={icon} mr="4" fontSize="16" _groupHover={{
                color:'white'
            }} />
            <Text>{name} </Text>

        </Flex>
        </Link>
    )
}