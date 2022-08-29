import { Carousel, Row, Container } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem";
import { Link } from "react-router-dom";

function Home() {
  const i1 = Math.floor(Math.random()*(storeItems.length-2));
  const i2 = i1 + 1;
  const i3 = i1 + 2;
  const featured = Math.floor(Math.random()*(storeItems.length-5));

  return (
    <div className="min_height">
      
      <Carousel interval={5500} style={{height: "500px", overflow: "hidden", borderRadius: "8px"}} controls={false}>
        <Carousel.Item>
          <Link title={`Produktseite aufrufen: "${storeItems[i1].name}"`} to={`/product/${i1+1}`}>
            <img src={storeItems[i1].imgSrc} className="d-block" style={{objectFit: "cover", height: "500px", width: "67%"}}></img>
            <Carousel.Caption className="carousel_caption" style={{backgroundColor: storeItems[i1].theme}}>
              <p className={`fw-light fs-4 m-0 ${storeItems[i1].textTheme}`}>{storeItems[i1].name}</p>
              <p className={`fs-3 m-0 ${storeItems[i1].textTheme}`}>{formatCurrency(storeItems[i1].price)}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link title={`Produktseite aufrufen: "${storeItems[i2].name}"`} to={`/product/${i2+1}`}>
            <img src={storeItems[i2].imgSrc} className="d-block" style={{objectFit: "cover", height: "500px", width: "67%"}}></img>
            <Carousel.Caption className="carousel_caption" style={{backgroundColor: storeItems[i2].theme}}>
              <p className={`fw-light fs-4 m-0 ${storeItems[i2].textTheme}`}>{storeItems[i2].name}</p>
              <p className={`fs-3 m-0 ${storeItems[i2].textTheme}`}>{formatCurrency(storeItems[i2].price)}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link title={`Produktseite aufrufen: "${storeItems[i3].name}"`} to={`/product/${i3+1}`}>
            <img src={storeItems[i3].imgSrc} className="d-block" style={{objectFit: "cover", height: "500px", width: "67%"}}></img>
            <Carousel.Caption className="carousel_caption" style={{backgroundColor: storeItems[i3].theme}}>
              <p className={`fw-light fs-4 m-0 ${storeItems[i3].textTheme}`}>{storeItems[i3].name}</p>
              <p className={`fs-3 m-0 ${storeItems[i3].textTheme}`}>{formatCurrency(storeItems[i3].price)}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>

      <div className="my-5 p-3 empf_container" style={{background: "rgba(0,0,0,0.075)", borderRadius: "12px"}}>
        <h2 className="mb-3">Empfohlen</h2>
        <Row lg={5} md={3} xs={1} className="g-4">
        {storeItems.filter(i => (i.id>featured && i.id<(featured+6))).map(i => (
          <StoreItem id={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} />
        ))}
      </Row>
      </div>
    </div>
  )
}

export default Home