import { useEffect } from 'react'
import {Button, Container, Nav, Navbar as NavbarBT} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import "./NavBar.css"

export function NavBar() {
    const{openCart, closeCart, cartQuantity} = useShoppingCart()

    useEffect(() => {
        if(cartQuantity>0){
            document.getElementById('itemCounter')?.classList.remove('position-absolute')
            document.getElementById('itemCounter')?.classList.add('opacity-100')
        } else {
            document.getElementById('itemCounter')?.classList.remove('opacity-100')
            setTimeout(() => {
                document.getElementById('itemCounter')?.classList.add('position-absolute')
            }, 330)
            
        }
    }, [cartQuantity])


    return(
        <NavbarBT sticky="top" className='bg-light shadow-sm mb-4 p-2 ms-auto me-0'>
            <Container>
                <Link to="/" className="d-flex logo" style={{textDecoration: "none"}}>
                    <div className="logo_container">
                        <img className="m-0" style={{height: "40px"}} src="warehouse-svgrepo-com.svg" />
                    </div>
                    <span className='m-0 fw-bold logo_name_full'>FinalWarehouse</span>
                    <span className='m-0 fw-bold fs-1 logo_name_short'>FW</span>
                </Link>

                <Nav className="nav_links">
                    <Nav.Link to='/store' as={NavLink} >
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink} >
                        About
                    </Nav.Link>
                </Nav>

                {cartQuantity > -1 && (          //only shows when there is an item in the cart
                    <Button className="shopping_cart border-0 p-0" onClick={openCart} style={{width: "3rem", height: "3rem", position: "relative"}} variant="outline-primary">
                        <img src="basket-svgrepo-com.svg" style={{height: "58%", margin: "0px"}} />
                        <div id="itemCounter" className='d-flex shopping_counter m-0 p-0 opacity-0'>
                            <p>{cartQuantity}</p>
                        </div>
                    </Button>
                )}
                
            </Container>
        </NavbarBT>
    )
}