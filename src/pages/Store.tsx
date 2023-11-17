import storeItems from '../data/items.json'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'

export function Store(): JSX.Element {
  return (
    <>
      <h1>Store-Page</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

// ----------------------------------Notes----------------------------------

{
  /* 
    <Row md={2} xs={1} lg={3} className="g-3"> ----> md-medium size screen, xs-small size, lg-large size.
    The number in the braces denotes the number of cards can fit for respective screen sizes
    className="g-3" -> gap - 3 betweeen cards 
  */
}

{
  /*
    <StoreItem {...item} /> [Props spread operator] is similar to the below individual prop mapping
    
    <StoreItem
      id={item.id}
      name={item.name}
      price={item.price}
      imgUrl={item.imgUrl}
    /> 
  */
}
