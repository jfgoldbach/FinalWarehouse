import { Card, Button, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import "./StoreItem.css"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgSrc: string
}

export function StoreItem({id, name, price, imgSrc}:StoreItemProps){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id);
    return(
        <Col>
        <Card className="item_container border-0 p-0">
            <Link title={`Produktseite aufrufen: "${name}"`} to={`/product/${id}`}>
            <Card.Img
            //className="border-bottom"
                variant="top"
                src={imgSrc}
                height="225px"
                style={{objectFit: "cover"}}
            />
            </Link>
            

            <Card.Body className="d-flex flex-column p-2">

                <Card.Title className="d-flex flex-column m-0">
                    <Link to={`/product/${id}`} style={{textDecoration: "none"}}>
                        <p className="fs-6 mb-1 text-muted">{name}</p>
                    </Link>
                    <p className="fw-normal">{formatCurrency(price)}</p>
                </Card.Title>

                <div className="mt-auto d-flex justify-content-center">
                    {quantity === 0
                        ? (<Button onClick={() => increaseCartQuantity(id)} className="w-100 neumo_button border-0" size="sm" style={{height: "35px"}}>+ In den Warenkorb</Button>)
                        : (<div className="d-flex justify-content-between align-items-center w-100" style={{height: "35px"}}>
                            
                            <div className="d-flex flex-row align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                <Button variant="outline-info" className="neumo_button_2 fw-bold fs-5 d-flex justify-content-center align-items-center pb-2" size="sm" style={{height: "35px", width: "35px"}} onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <div className="fs-4 d-flex align-items-center justify-content-center">
                                        {quantity}x
                                    </div>
                                </div>
                                <Button variant="outline-info" className="neumo_button_2 fw-bold fs-5 d-flex justify-content-center align-items-center pb-2" size="sm" style={{height: "35px", width: "35px"}} onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>

                            <Button className="neumo_button_2 fs-6 d-flex justify-content-center align-items-center pb-2 fw-bold" onClick={() => removeFromCart(id)} variant="outline-danger" size="sm" style={{height: "35px", width: "35px"}}>&times;</Button>
                        </div>)
                    }
                </div>

            </Card.Body>
        </Card>
        </Col>
    )
}