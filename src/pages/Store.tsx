import { Row, Form} from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import StoreItems from "../data/items.json"
import filter from "../data/categories.json"
import { useState } from 'react'
import "./Store.css"

function Store() {
  const[categ, setCateg] = useState("Alles")

  return (
    <div className="min_height">
      <div className='d-flex align-items-center gap-3 mb-5'>
        <span>Kategorie:</span>
        <Form.Select className="w-auto categories border-0" onChange={e => {setCateg(e.target.value)}}>
          {filter.map(i => (<option value={i.name}>{i.name}</option>))}
        </Form.Select>
      </div>

      <Row xl={7} lg={5} md={2} xs={1} className="g-4 mb-5">
        {StoreItems.filter(i => {
          return(
          categ=="Alles"
            ?true
            :i.category.includes(categ))
        }).map(i => (
          <StoreItem id={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} />
        ))}
      </Row>
    </div>
  )
}

export default Store