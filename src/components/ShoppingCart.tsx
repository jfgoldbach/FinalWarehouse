import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItems";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
    cartQuantity: number
}

export function ShoppingCart({isOpen, cartQuantity}: ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart()
    const cartValue = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)
    const shipping = cartValue>60||cartValue==0? 0: 3.95

    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton className="border-bottom my-2">
                <Offcanvas.Title className="fs-6">
                    <span>Warenkorb</span>
                    <span className="text-muted">{` (${cartQuantity} Artikel)`}</span>
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={4}>
                    {cartItems.map(i => (
                        <CartItem key={i.id} {...i} />
                    ))}
                    
                    <div>
                        {cartQuantity>0 &&
                        <div className="m-0 p-0 fs-6 d-flex justify-content-between" style={{height: "25px"}}>
                            <p>Versand:</p> 
                            <div className="d-flex align-items-center">
                            {shipping>0 && <div className="info_icon fw-bold m-2" title={`Noch ${formatCurrency(60 - cartValue)} bis zum kostenlosen Versand!`} style={{border: "1px solid black"}}>i</div>}
                            {`${shipping>0? formatCurrency(shipping): "Kostenlos"}`}
                            
                            </div>
                        </div>}
                        <div className="m-0 p-0 fw-bold fs-5 d-flex justify-content-between">
                            <p className="fw-normal">Gesamt: </p>
                            {formatCurrency(cartValue + shipping)}
                        </div>
                    </div>
                    
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}