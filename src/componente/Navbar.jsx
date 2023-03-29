import {FiMenu,FiBell, FiChevronDown, FiArchive, FiShoppingCart, FiUsers, FiSearch} from 'react-icons/fi';

import { Box, Flex, useColorMode, useColorModeValue,Text, CloseButton, Link, Drawer, DrawerContent,IconButton, HStack, Menu, MenuButton,MenuList ,Avatar, VStack, MenuItem, MenuDivider, Icon, useDisclosure} from "@chakra-ui/react"



  



export const MobbileNav = ({LinkItems}) => {
    return (
   
    <Flex

      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      position="relative"
      zIndex={100}
     
      
      
     
      >
      <Flex >
      <HStack >
            {LinkItems?.map((link) => (
            <NavItem key={link.name} icon={link.icon} name={link.name} path={link.path}>
                {link.name}
            </NavItem>   ))}
       



     </HStack>
      </Flex>
      
    

       



      <IconButton
        display={{ base: 'flex', md: 'none' }}
       
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        
        
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiSearch />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
             
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">nombre</Text>
                  <Text fontSize="xs" color="gray.600">
                    rol
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>



        
    </Flex>

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