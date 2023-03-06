import { Description } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    capacity: string
    price: string
    type: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <p className="product-description">This is {description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">Price: ${price}</div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
