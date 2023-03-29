import {FiMenu,FiBell, FiChevronDown, FiArchive, FiShoppingCart, FiUsers, FiSearch} from 'react-icons/fi';
import { MdOutlinePointOfSale } from "react-icons/md";
import { Box, Flex, useColorMode, useColorModeValue,Text, CloseButton, Link, Drawer, DrawerContent,IconButton, HStack, Menu, MenuButton,MenuList ,Avatar, VStack, MenuItem, MenuDivider, Icon, useDisclosure} from "@chakra-ui/react"
import {useRef} from 'react';


  



export const MobbileNav = () => {
    return (
        <Flex

      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      position="relative"
      zIndex={100}
      
      
      
     
      >
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