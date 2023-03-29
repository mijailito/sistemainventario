import { MobbileNav } from "../componente/Navbar"
import { SidebarContent } from "../componente/sidebar"
import { FiArchive, FiShoppingCart, FiUsers } from 'react-icons/fi'
import { MdOutlinePointOfSale } from 'react-icons/md'
const LinkItems=[
   
  { name: 'Productos', icon: FiShoppingCart , path: '/productos' },
  { name: 'Ventas', icon: MdOutlinePointOfSale, path: '/ventas' },
  
] 

export const VendedoraLayout = ({children}) => { 
    return (
        <>
        
        <div style={{height:"100vh"}}>
        <MobbileNav  />
        <SidebarContent LinkItems={LinkItems} />
        
        
        </div>
        <main>
{children}
        </main>
        
        
        
        
        </>
    )
}