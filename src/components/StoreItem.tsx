import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

export type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  name,
  price,
  imgUrl,
}: StoreItemProps): JSX.Element {
  const quantity = 1
  return (
    <Card data-testid="store-item-card">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
        data-testid="store-item-card-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2" data-testid="store-item-name">
            {name}
          </span>
          <span className="ms-2 text-muted" data-testid="store-item-price">
            {formatCurrency(price)}
          </span>
        </Card.Title>
        {/* {quantity === 0 ? (
          <Button className="w-100" data-testid="add-to-cart-button">
            + Add to cart
          </Button>
        ) : ( */}
        <div
          className="d-flex align-items-center flex-column"
          style={{ gap: '.5rem' }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: '.5rem' }}
          >
            <Button data-testid="decrement-cart-button">-</Button>
            <div>
              <span className="fs-3" data-testid="cart-quantity-value">
                {quantity}
              </span>
              in cart
            </div>
            <Button data-testid="increment-cart-button">+</Button>
          </div>
          <Button
            variant="danger"
            size="sm"
            data-testid="remove-from-cart-button"
          >
            Remove
          </Button>
        </div>
        {/* )} */}
      </Card.Body>
    </Card>
  )
}

// ----------------------------------Notes----------------------------------

{
  /* 
    1. For all the Card styles and bootstrap related classNames, refer kyle's video timeline - 23:23 
    2. Guide links to test a card component: 
      https://medium.com/att-israel/practical-concepts-for-unit-testing-in-react-native-d8ad72fdb659
      https://stackoverflow.com/questions/53119123/react-testing-library-test-styles-specifically-background-image
  */
}
