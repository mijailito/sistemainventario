import {FiMenu,FiBell, FiChevronDown, FiArchive, FiShoppingCart, FiUsers} from 'react-icons/fi';
import { MdOutlinePointOfSale } from "react-icons/md";
import { Box, Flex, useColorMode, useColorModeValue,Text, CloseButton, Link, Drawer, DrawerContent,IconButton, HStack, Menu, MenuButton,MenuList ,Avatar, VStack, MenuItem, MenuDivider, Icon} from "@chakra-ui/react"
const LinkItems=[
    { name: 'Almacen', icon: FiArchive },
  { name: 'Productos', icon: FiShoppingCart },
  { name: 'Ventas', icon: MdOutlinePointOfSale },
  { name: 'Usuarios', icon: FiUsers },
 

]
export function SidebarHeader () {
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100','gray.900')}>
            <SidebarContent />
            <Drawer>
                <DrawerContent>
                    <SidebarContent />
                </DrawerContent>
            </Drawer>
            <MobbileNav />


        </Box>

    )
}
const SidebarContent = () => {
    return (
        <Box transition="3s ease" 
        bgGradient="linear(to bottom,#52B788, #4CAF50)"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200','gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
    
        >
        <Flex h='20' alignItems='center' mx='8' justifyContent="space-between" >
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" >
                Logo
            </Text>
            <CloseButton display={{base:'flex', md:'none'}}/>
        </Flex>
        {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} name={link.name}>
                {link.name}
            </NavItem>   ))}
       


        </Box>
    )
}
const NavItem = ({icon, name}) => {
    return (
        <Link href='#' style={{textDecoration:'none'}} _focus={{boxShadow:'none'}}>
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
const MobbileNav = () => {
    return (
        <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
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
          icon={<FiBell />}
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