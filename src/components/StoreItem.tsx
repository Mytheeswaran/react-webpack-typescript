import { Card } from 'react-bootstrap'
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
