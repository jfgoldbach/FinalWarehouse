import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"
import "./CartItem.css"
import { Link } from "react-router-dom"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {closeCart, removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(item == null) return null

    const visitItem = () => {
        closeCart()
        document.getElementById('productsMainDiv')?.classList.add('fade_in')
    }

    return(
        
        <Stack className="cart_item_container" direction="horizontal" gap={2}>
            <img src={item.imgSrc} style={{width: "75px", height: "75px", borderRadius: "8px", objectFit: "cover"}} />
            <div className="me-auto">
                <Link to={`/product/${item.id}`} onClick={visitItem} title={`Produktseite von "${item.name}" ansehen`} className="text-dark" style={{textDecoration: "none"}}>
                    {item.name} 
                </Link>
                {quantity > 1 && <div className="text-muted" style={{fontSize: ".75rem"}}>({quantity} Stk.)</div>}
            </div>

            <div className="d-flex flex-column text-right">
                <span style={{textAlign: "right"}}>{formatCurrency(item.price * quantity)}</span>
                {quantity > 1 && <div className="text-muted" style={{fontSize: ".75rem"}}>({formatCurrency(item.price)}/Stk.)</div>}
            </div>

            <Button title={`${quantity}x ${item.name} entfernen`} className="justify-content-center align-items-center fs-5 fw-bold cart_delete_btn" variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>🗑</Button>
        </Stack>
        
    )
}