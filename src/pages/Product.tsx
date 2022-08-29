import { Col, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { formatCurrency } from "../utilities/formatCurrency"
import "./Product.css"
import storeItems from "../data/items.json"
import { useShoppingCart } from '../context/ShoppingCartContext'
import { useEffect } from 'react'

function Product() {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const {id} = useParams()
    const idNum = parseInt(`${id}`)
    const quantity = getItemQuantity(idNum);
    const item = storeItems.filter(i => JSON.stringify(i.id) == id)[0] //index 0, because filter returns an array

    setTimeout(() => {
        document.getElementById('productsMainDiv')?.classList.remove('fade_in')
    }, 300)

  return (
    <div id="productsMainDiv" className='min_height fade_in'>
        <p>{`Kategorie: ${item.category}`}</p>
        <Row lg={3} xs={1} className="p-0 m-0 product" style={{borderRadius: "10px"}}>

            <img className="prodcut_img p-0" src={item.imgSrc} style={{width: "70%", height: "650px", objectFit: "cover"}}></img>
            
            <Col className={`prod_info d-flex flex-column justify-content-between p-0 ${item.textTheme}`}>
                <div className='d-flex flex-column' style={{gap: "65px"}}>

                    <div className="px-4 py-1 me-5 product_card" style={{background: item.theme}}>
                        <p className='fs-2 m-0 p-0'>{item.name}</p>
                        <p className='fs-2 fw-bold m-0'>{formatCurrency(item.price)}</p>
                        <div title="Kostenloser Versand ab 60 € Warenkorb-Wert" className='fw-light d-flex justify-content-end align-items-center mb-2'>
                            {item.price>=60 && "Kostenloser Versand" || "+ 3,95 € Versand"}
                            <div style={{border: `1px solid ${item.textTheme=="text-light"? "white": "black"}`}} className='info_icon fw-bold'>i</div>
                        </div>
                    </div>

                    <div className="px-3 py-1 text-dark" style={{borderRadius: "0 25px 25px 0"}}>
                        <ul className='fw-light m-0 p-0 text-end w-100' style={{listStyleType: "none", fontSize: "1.1rem"}}>
                            {item.itemAtts?.map(i => <li key={i}>{i} -</li>)}
                        </ul>
                    </div>

                </div>

                <div className="d-flex m-3 justify-content-end flex-column text-end">
                    <p className='text-muted fw-light fs-7 6'>Artikelnummer {id}</p>
                    {quantity === 0
                        ? (<Button onClick={() => increaseCartQuantity(idNum)} className="w-100 border-0 cart_button" size="sm" style={{height: "35px", width: "100%"}}>+ In den Warenkorb</Button>)
                        : (<div className="d-flex justify-content-between align-items-center gap-4" style={{height: "35px"}}>

                            <div className="d-flex flex-row align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                <Button variant="outline-info" className="amount_button fw-bold fs-5 d-flex justify-content-center align-items-center" size="sm" style={{height: "35px", width: "35px"}} onClick={() => decreaseCartQuantity(idNum)}>-</Button>
                                <div>
                                    <div className="fs-3 d-flex text-dark align-items-center justify-content-center">
                                        <span title={`${quantity}x "${item.name}" im Warenkorb`}>{quantity}x</span>
                                    </div>
                                </div>
                                <Button variant="outline-info" className="amount_button fw-bold fs-5 d-flex justify-content-center align-items-center" size="sm" style={{height: "35px", width: "35px"}} onClick={() => increaseCartQuantity(idNum)}>+</Button>
                            </div>
                            <Button className="amount_button fs-6 d-flex justify-content-center align-items-center" onClick={() => removeFromCart(idNum)} variant="outline-danger" size="sm" style={{height: "35px"}}>{quantity>1 && "Alle entfernen" || "Entfernen"}</Button>
                        </div>)
                    }
                </div>

            </Col>
        </Row>
        <Container className='px-0 py-4'>
            <h3 className="fw-light">Beschreibung</h3>
            <div className='prodcut_descr bg-light'>
                <p>Sunt voluptate rem vero unde molestiae quia placeat. Sunt et est rerum nihil. Nobis eligendi cumque amet. Quos enim molestiae dolor est ratione cupiditate omnis.</p>
                <p>Quos quasi aspernatur reiciendis cumque quia voluptatem. Hic illo facilis quidem. Et ipsam et dolores est sed voluptas ab. Reprehenderit adipisci praesentium tempora dolorum dolorem. Quis explicabo repudiandae laborum eligendi quos. Enim quis necessitatibus quo autem et officia voluptate eaque.</p>
                <p>Aut itaque reprehenderit ea. Corporis molestiae deserunt molestiae. Autem pariatur amet nobis veritatis. Distinctio reprehenderit est rerum assumenda odit commodi harum ducimus.</p>
                <p>Qui quae consectetur quisquam eligendi. Voluptatem voluptatem libero eaque est eos nesciunt rerum officiis. Eaque sed suscipit nihil nulla voluptas qui rerum facere. Autem voluptates praesentium quidem. Sint animi ipsum quas quia excepturi autem dolorem. Nam doloremque commodi recusandae ipsa occaecati eos.</p>
            </div>
        </Container>
    </div>
  )
}

export default Product